(() => {
  const root = document.getElementById('ga-calendar');
  if (!root) return;
  const zone = 'America/New_York';
  const today = new Intl.DateTimeFormat('en-CA',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  let month = today.slice(0,7), requestNumber = 0, controller;
  const grid = root.querySelector('.ga-grid'), status = root.querySelector('.ga-status');
  const dialog = root.querySelector('dialog');
  const mobile = document.createElement('div');
  mobile.className='ga-mobile-schedule';
  const mobileList=document.createElement('div');mobileList.id='ga-mobile-stops';mobileList.setAttribute('role','list');
  const mobileNote=document.createElement('p');mobileNote.className='ga-mobile-note';mobileNote.setAttribute('role','status');
  const expand=document.createElement('button');expand.type='button';expand.className='ga-button ga-expand';expand.setAttribute('aria-controls',mobileList.id);
  mobile.append(mobileNote,mobileList,expand);grid.after(mobile);
  let monthEvents=[],expanded=false;
  const dateKey = date => new Intl.DateTimeFormat('en-CA',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit'}).format(date);
  const time = date => new Intl.DateTimeFormat('en-US',{timeZone:zone,hour:'numeric',minute:'2-digit'}).format(date);
  const dateLabel = date => new Intl.DateTimeFormat('en-US',{timeZone:zone,weekday:'long',month:'long',day:'numeric',year:'numeric'}).format(date);
  const make = (tag, cls, text) => {const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;};
  function eventDates(e) {
    return e.allDay ? {start:e.start.slice(0,10),end:e.end.slice(0,10)} : {
      start:dateKey(new Date(e.start)),end:dateKey(new Date(new Date(e.end).getTime()-1))
    };
  }
  function covers(e,key) {const d=eventDates(e);return key>=d.start && (e.allDay?key<d.end:key<=d.end);}
  function eventTime(e) {return e.allDay?'All day':`${time(new Date(e.start))} – ${time(new Date(e.end))}`;}
  function openEvent(event,button) {
    if(event.busy) return;
    dialog.querySelector('h3').textContent=event.title;
    dialog.querySelector('[data-event-time]').textContent=event.allDay
      ? `${event.start}${event.end > nextDay(event.start) ? ` through ${previousDay(event.end)}` : ''} · All day`
      : `${dateLabel(new Date(event.start))} · ${eventTime(event)} Eastern${dateKey(new Date(event.start))!==dateKey(new Date(event.end)) ? ` · Ends ${dateLabel(new Date(event.end))}`:''}`;
    dialog.querySelector('[data-event-location]').textContent=event.location||'';
    // Calendar descriptions may contain HTML. Render only plain text, never injected markup.
    dialog.querySelector('[data-event-description]').textContent=new DOMParser().parseFromString(event.description||'','text/html').body.textContent;
    const map=dialog.querySelector('[data-event-map]');map.hidden=!event.location;
    if(event.location)map.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(event.location);
    dialog.showModal();
    dialog.addEventListener('close',()=>button.focus(),{once:true});
  }
  function nextDay(key,delta=1){const d=new Date(key+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+delta);return d.toISOString().slice(0,10);}
  const previousDay=key=>nextDay(key,-1);
  function renderMobile(){
    mobileList.replaceChildren();
    const upcoming=monthEvents.filter(e=>e.allDay?e.end>today:new Date(e.end)>new Date());
    const visible=expanded?monthEvents:upcoming.slice(0,5);
    mobileNote.textContent=expanded?'All stops in this month.':upcoming.length?`Next ${Math.min(5,upcoming.length)} upcoming stops in this month.`:'No upcoming stops this month. Use Next to see the following month.';
    for(const event of visible){
      const row=make('div','ga-mobile-stop');row.setAttribute('role','listitem');
      const date=eventDates(event).start;
      row.append(make('p','ga-mobile-date',new Date(date+'T12:00:00Z').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',timeZone:'UTC'})));
      const button=make(event.busy?'div':'button','ga-event'+(event.busy?' ga-busy':''));
      button.append(make('strong','',event.busy?'Busy':event.title),make('time','',eventTime(event)));
      if(!event.busy){button.type='button';button.addEventListener('click',()=>openEvent(event,button));}
      row.append(button);mobileList.append(row);
    }
    expand.hidden=!expanded&&monthEvents.length===visible.length;
    expand.textContent=expanded?'Show fewer':'View full month';expand.setAttribute('aria-expanded',String(expanded));
  }
  expand.addEventListener('click',()=>{
    expanded=!expanded;renderMobile();
    if(!expanded)root.scrollIntoView({behavior:'instant',block:'start'});
  });
  function render(events) {
    grid.replaceChildren();
    monthEvents=events.filter(e=>{const d=eventDates(e);return d.start.slice(0,7)<=month&&(e.allDay?previousDay(d.end):d.end).slice(0,7)>=month;}).sort((a,b)=>a.start.localeCompare(b.start));
    expanded=false;renderMobile();
    const [year,m]=month.split('-').map(Number), first=new Date(Date.UTC(year,m-1,1,12));
    const total=new Date(Date.UTC(year,m,0)).getUTCDate();
    const cells=Math.ceil((first.getUTCDay()+total)/7)*7;
    const start=new Date(first);start.setUTCDate(1-first.getUTCDay());
    let inMonth=0;
    for(let i=0;i<cells;i++){
      const day=new Date(start);day.setUTCDate(day.getUTCDate()+i);const key=day.toISOString().slice(0,10);
      const entries=events.filter(e=>covers(e,key));
      if(key.startsWith(month)&&entries.length)inMonth+=entries.length;
      const cell=make('div','ga-day'+(!key.startsWith(month)?' ga-outside':'')+(key===today?' ga-current':'')+(entries.length?' ga-has-events':''));
      cell.setAttribute('role','listitem');cell.setAttribute('aria-label',day.toLocaleDateString('en-US',{timeZone:'UTC',dateStyle:'full'}));
      const number=make('span','ga-date',String(day.getUTCDate()));if(key===today)number.setAttribute('aria-current','date');cell.append(number);
      entries.forEach(event=>{
        // Defense in depth: busy objects are reduced to a label here too.
        const button=make(event.busy?'div':'button','ga-event'+(event.busy?' ga-busy':''));
        if(!event.busy)button.type='button';
        button.append(make('strong','',event.busy?'Busy':event.title));
        button.append(make('time','',eventTime(event)));
        if(!event.busy){button.setAttribute('aria-label',`${event.title}, ${dateLabel(day)}, ${eventTime(event)}`);button.addEventListener('click',()=>openEvent(event,button));}
        cell.append(button);
      });grid.append(cell);
    }
    if(!inMonth)status.textContent='No scheduled stops this month. Check back soon for new dates.';
  }
  async function load() {
    const id=++requestNumber;if(controller)controller.abort();controller=new AbortController();
    root.querySelector('[data-month]').textContent=new Date(month+'-15T12:00:00Z').toLocaleDateString('en-US',{month:'long',year:'numeric',timeZone:'UTC'});
    status.classList.remove('ga-error');status.textContent='Loading live schedule…';grid.setAttribute('aria-busy','true');grid.replaceChildren();mobileList.replaceChildren();mobileNote.textContent='';expand.hidden=true;
    try{
      const response=await fetch('api/calendar?month='+month,{signal:controller.signal});
      if(!response.ok)throw new Error('Schedule unavailable');
      const data=await response.json();if(id!==requestNumber)return;
      if(!Array.isArray(data.events))throw new Error('Invalid response');
      status.textContent='Live schedule · All times Eastern · Select a public event for details.';render(data.events);
    }catch(error){if(id!==requestNumber||error.name==='AbortError')return;status.classList.add('ga-error');status.textContent='The live schedule is temporarily unavailable. Try Refresh or open the full calendar below.';}
    finally{if(id===requestNumber)grid.setAttribute('aria-busy','false');}
  }
  root.querySelectorAll('[data-shift]').forEach(button=>button.addEventListener('click',()=>{
    const d=new Date(month+'-15T12:00:00Z');d.setUTCMonth(d.getUTCMonth()+Number(button.dataset.shift));
    if(d.getUTCFullYear()<2020||d.getUTCFullYear()>2100)return;month=d.toISOString().slice(0,7);load();
  }));
  root.querySelector('[data-today]').addEventListener('click',()=>{month=today.slice(0,7);load();});
  root.querySelector('[data-refresh]').addEventListener('click',load);
  dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  load();
})();
