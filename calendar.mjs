import ICAL from 'ical.js';

export const CALENDAR_ID = 'c_db3603520df867dbe682a2586e6c7b0a0d377f070e0289ec2a7238141104c5ed@group.calendar.google.com';
export const FEED_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(CALENDAR_ID)}/public/basic.ics`;

export function monthRange(month) {
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month || '')) throw new Error('Invalid month');
  const [year, number] = month.split('-').map(Number);
  if (year < 2020 || year > 2100) throw new Error('Invalid year');
  // Padding includes every visible grid day and Eastern/UTC boundary.
  return {start: new Date(Date.UTC(year, number - 1, -6)), end: new Date(Date.UTC(year, number, 8))};
}

function isPrivate(event) {
  const privacy = String(event.component.getFirstPropertyValue('class') || '').toUpperCase();
  return ['PRIVATE', 'CONFIDENTIAL'].includes(privacy) || /^(busy|private event)$/i.test(event.summary || '');
}

export function publicEvents(ics, month) {
  const range = monthRange(month);
  const calendar = new ICAL.Component(ICAL.parse(ics));
  for (const zone of calendar.getAllSubcomponents('vtimezone')) {
    const id = zone.getFirstPropertyValue('tzid');
    if (id) ICAL.TimezoneService.register(id, new ICAL.Timezone(zone));
  }
  const components = calendar.getAllSubcomponents('vevent');
  const overrides = components.filter(c => c.hasProperty('recurrence-id')).map(c => new ICAL.Event(c));
  const result = [];
  function add(event, start, end, parentPrivate = false) {
    if (String(event.component.getFirstPropertyValue('status')).toUpperCase() === 'CANCELLED') return;
    const a = start.toJSDate(), b = end.toJSDate();
    if (a >= range.end || b <= range.start) return;
    const busy = parentPrivate || isPrivate(event);
    const allDay = start.isDate;
    result.push({
      start: allDay ? start.toString() : a.toISOString(),
      end: allDay ? end.toString() : b.toISOString(), allDay, busy,
      title: busy ? 'Busy' : (event.summary || 'Food truck stop'),
      ...(busy ? {} : {location: event.location || '', description: event.description || ''})
    });
  }
  for (const component of components.filter(c => !c.hasProperty('recurrence-id'))) {
    const event = new ICAL.Event(component);
    if (!event.startDate) continue;
    if (!event.isRecurring()) {add(event, event.startDate, event.endDate); continue;}
    overrides.filter(e => e.uid === event.uid).forEach(e => event.relateException(e));
    const iterator = event.iterator();
    let count = 0, occurrence;
    while ((occurrence = iterator.next())) {
      if (++count > 50000) throw new Error('Recurrence limit exceeded');
      if (occurrence.toJSDate() >= range.end) break;
      const details = event.getOccurrenceDetails(occurrence);
      add(details.item, details.startDate, details.endDate, isPrivate(event));
      if (result.length > 3000) throw new Error('Event limit exceeded');
    }
  }
  return result.sort((a,b) => a.start.localeCompare(b.start));
}
