const assert = require('node:assert/strict');
const fs = require('node:fs');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
(async()=>{
  let browser;
  try{browser=await chromium.launch({headless:true});}
  catch{browser=await chromium.launch({headless:true,channel:'msedge'});}
  try {
    const page=await browser.newPage({viewport:{width:1440,height:1100}});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto('http://127.0.0.1:4173/#route');
    await page.locator('.ga-grid[aria-busy="false"]').waitFor({timeout:25000});
    assert(!(await page.locator('.ga-status').innerText()).includes('unavailable'),'Live calendar should load');
    assert(await page.locator('.ga-event button, button.ga-event').count()>0);
    const title=await page.locator('[data-month]').innerText();
    await page.getByRole('button',{name:'Next month',exact:true}).click();
    await page.locator('.ga-grid[aria-busy="false"]').waitFor();
    assert.notEqual(await page.locator('[data-month]').innerText(),title);
    await page.locator('button.ga-event').first().click();
    assert(await page.locator('.ga-dialog').evaluate(el=>el.open));
    await page.keyboard.press('Escape');
    assert(!(await page.locator('.ga-dialog').evaluate(el=>el.open)));
    await page.getByRole('button',{name:'This month',exact:true}).click();
    await page.locator('.ga-grid[aria-busy="false"]').waitFor();
    const screenshotStyle=await page.addStyleTag({content:'header{visibility:hidden!important}'});
    await page.locator('#ga-calendar').screenshot({path:'calendar-desktop.png',animations:'disabled'});
    await screenshotStyle.evaluate(el=>el.remove());
    assert.equal(await page.locator('#order-online iframe').getAttribute('src'),'https://easyeats.com/widgets/schedule/fid/2515?colorScheme=dark');
    assert.equal(await page.locator('#menu article').count(),8);
    await page.locator('#toggle-archive').click();
    assert(await page.locator('#green-apple-archives').evaluate(el=>el.classList.contains('open')));
    await page.locator('#menu [data-lightbox-src]').first().click();
    assert(await page.locator('#photo-lightbox').evaluate(el=>el.classList.contains('open')));
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('form[action="https://formspree.io/f/xgoddebl"]').count(),2);
    for(const width of [390,320,768]){
      await page.setViewportSize({width,height:1000});
      assert(await page.locator('#ga-calendar').evaluate(el=>el.scrollWidth<=el.clientWidth+1),'Calendar horizontal overflow at '+width);
      if(width===390){const style=await page.addStyleTag({content:'header{visibility:hidden!important}'});await page.locator('#ga-calendar').screenshot({path:'calendar-mobile.png',animations:'disabled'});await style.evaluate(el=>el.remove());assert.equal(await page.locator('.ga-mobile-schedule').evaluate(el=>getComputedStyle(el).display),'block');}
    }
    // Deliberately feed hostile private details to verify client-side defense, too.
    await page.setViewportSize({width:390,height:1000});
    await page.route('**/api/calendar?*',route=>{
      const month=new URL(route.request().url()).searchParams.get('month');
      return route.fulfill({json:{events:Array.from({length:30},(_,i)=>({title:'Test stop '+(i+1),start:month+'-28T16:00:00Z',end:month+'-28T19:00:00Z',allDay:false,busy:false}))}});
    });
    await page.getByRole('button',{name:'Refresh',exact:true}).click();await page.locator('.ga-grid[aria-busy="false"]').waitFor({state:'attached'});
    assert.equal(await page.locator('.ga-mobile-stop').count(),5);
    await page.getByRole('button',{name:'View full month',exact:true}).click();assert.equal(await page.locator('.ga-mobile-stop').count(),30);
    await page.getByRole('button',{name:'Show fewer',exact:true}).click();assert.equal(await page.locator('.ga-mobile-stop').count(),5);
    await page.setViewportSize({width:1440,height:1100});assert.equal(await page.locator('.ga-grid button.ga-event').count(),30);
    await page.setViewportSize({width:390,height:1000});
    await page.unroute('**/api/calendar?*');
    await page.route('**/api/calendar?*',route=>route.fulfill({json:{events:[{title:'SECRET CUSTOMER',location:'SECRET ADDRESS',description:'SECRET NOTES',busy:true,start:'2026-11-24T16:00:00Z',end:'2026-11-24T19:00:00Z',allDay:false}]}}));
    await page.getByRole('button',{name:'Refresh',exact:true}).click();await page.locator('.ga-grid[aria-busy="false"]').waitFor({state:'attached'});
    const text=await page.locator('#ga-calendar').innerText();assert(!text.includes('SECRET'));assert(text.includes('Busy'));
    await page.unroute('**/api/calendar?*');
    await page.route('**/api/calendar?*',route=>route.fulfill({json:{events:[]}}));
    await page.getByRole('button',{name:'Refresh',exact:true}).click();await page.locator('.ga-grid[aria-busy="false"]').waitFor({state:'attached'});
    assert((await page.locator('.ga-status').innerText()).includes('No scheduled stops'));
    await page.unroute('**/api/calendar?*');
    await page.route('**/api/calendar?*',route=>route.fulfill({status:502,json:{error:'unavailable'}}));
    await page.getByRole('button',{name:'Refresh',exact:true}).click();await page.locator('.ga-grid[aria-busy="false"]').waitFor({state:'attached'});
    assert((await page.locator('.ga-status').innerText()).includes('temporarily unavailable'));
    assert.deepEqual(errors,[]);
    console.log('PASS: live feed; month navigation; public detail dialog; Escape; desktop and mobile layouts; no calendar overflow; private client masking; empty/error states; 8 menu cards; original gallery and lightbox; EasyEats and both forms preserved.');
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
