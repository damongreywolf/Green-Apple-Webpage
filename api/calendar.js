import {FEED_URL, monthRange, publicEvents} from '../lib/calendar.mjs';

export default async function handler(req, res) {
  if (req.method !== 'GET') {res.setHeader('Allow', 'GET'); return res.status(405).json({error:'Method not allowed'});}
  const month = req.query.month;
  try {monthRange(month);} catch {return res.status(400).json({error:'Choose a valid month.'});}
  try {
    // Only the PUBLIC feed is used. Never use a secret iCal URL or account OAuth token.
    const response = await fetch(FEED_URL, {signal:AbortSignal.timeout(12000)});
    if (!response.ok) throw new Error('Calendar unavailable');
    const text = await response.text();
    if (text.length > 5000000 || !text.startsWith('BEGIN:VCALENDAR')) throw new Error('Invalid calendar');
    const events = publicEvents(text, month);
    res.setHeader('Cache-Control','public, max-age=60, s-maxage=120');
    return res.status(200).json({events, timeZone:'America/New_York'});
  } catch {
    res.setHeader('Cache-Control','no-store');
    return res.status(502).json({error:'The live schedule is temporarily unavailable. Please open the full calendar or try again.'});
  }
}
