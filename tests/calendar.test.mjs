import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {publicEvents,monthRange} from '../lib/calendar.mjs';
import handler from '../api/calendar.js';
const wrap=events=>`BEGIN:VCALENDAR\r\nVERSION:2.0\r\n${events}\r\nEND:VCALENDAR`;
const event=(extra='',uid='a')=>`BEGIN:VEVENT\r\nUID:${uid}\r\nDTSTART:20261124T160000Z\r\nDTEND:20261124T190000Z\r\nSUMMARY:Lunch stop\r\nLOCATION:123 Main Street\r\nDESCRIPTION:Sandwiches and lunch\r\n${extra}\r\nEND:VEVENT`;
test('public event details and UTC timestamps survive',()=>{
  const [e]=publicEvents(wrap(event('CLASS:PUBLIC')),'2026-11');
  assert.equal(e.title,'Lunch stop');assert.equal(e.location,'123 Main Street');assert.equal(e.start,'2026-11-24T16:00:00.000Z');
});
test('private and confidential details never leave the server',()=>{
  for(const cls of ['PRIVATE','CONFIDENTIAL']){
    const [e]=publicEvents(wrap(event('CLASS:'+cls)),'2026-11');
    assert.equal(e.title,'Busy');assert.equal(e.busy,true);
    assert(!('location'in e));assert(!('description'in e));assert(!JSON.stringify(e).includes('Main Street'));
  }
});
test('default visibility in public feed retains details',()=>assert.equal(publicEvents(wrap(event()),'2026-11')[0].busy,false));
test('already redacted Busy feed entries stay private',()=>assert.equal(publicEvents(wrap(event().replace('SUMMARY:Lunch stop','SUMMARY:Busy')),'2026-11')[0].busy,true));
test('cancelled events and out-of-range events excluded',()=>{
 assert.equal(publicEvents(wrap(event('STATUS:CANCELLED')),'2026-11').length,0);
 assert.equal(publicEvents(wrap(event()),'2027-02').length,0);
});
test('all-day end remains exclusive',()=>{
 const text=event().replace('DTSTART:20261124T160000Z','DTSTART;VALUE=DATE:20261124').replace('DTEND:20261124T190000Z','DTEND;VALUE=DATE:20261126');
 const [e]=publicEvents(wrap(text),'2026-11');assert(e.allDay);assert.equal(e.end,'2026-11-26');
});
test('recurrence respects exclusions and cancelled exceptions',()=>{
 const recurring=event('RRULE:FREQ=DAILY;COUNT=3\r\nEXDATE:20261125T160000Z');
 const exception=event('RECURRENCE-ID:20261126T160000Z\r\nSTATUS:CANCELLED').replaceAll('20261124','20261126');
 assert.equal(publicEvents(wrap(recurring+'\r\n'+exception),'2026-11').length,1);
});
test('private recurring series cannot expose exception details',()=>{
 const recurring=event('CLASS:PRIVATE\r\nRRULE:FREQ=DAILY;COUNT=2');
 const exception=event('RECURRENCE-ID:20261125T160000Z\r\nCLASS:PUBLIC').replaceAll('20261124','20261125');
 const events=publicEvents(wrap(recurring+'\r\n'+exception),'2026-11');assert.equal(events.length,2);assert(events.every(e=>e.busy));
});
test('input validation rejects invalid months',()=>{for(const month of ['2026-00','2026-13','anything','2026-1','1900-01'])assert.throws(()=>monthRange(month));});
test('API handles invalid requests without fetching',async()=>{
 const res={headers:{},setHeader(k,v){this.headers[k]=v;},status(n){this.code=n;return this;},json(data){this.data=data;return this;}};
 await handler({method:'GET',query:{month:'bad'}},res);assert.equal(res.code,400);
 await handler({method:'POST',query:{}},res);assert.equal(res.code,405);
});
test('all original sections except route and original script are unchanged',()=>{
 const current=readFileSync(new URL('../index.html',import.meta.url),'utf8');
 const original=execFileSync('git',['show','HEAD:index.html'],{encoding:'utf8'});
 const normalized=s=>s.replace(/\r\n/g,'\n');
 const sections=s=>[...s.matchAll(/<section\b[^>]*\bid="([^"]+)"[\s\S]*?<\/section>/g)].filter(m=>m[1]!=='route').map(m=>normalized(m[0]));
 assert.deepEqual(sections(current),sections(original));
 assert.equal(current.match(/<script>\(function\(\)[\s\S]*?<\/script>/)[0],original.match(/<script>\(function\(\)[\s\S]*?<\/script>/)[0]);
 assert(!current.includes('class="green-apple-calendar-frame"'));
});
