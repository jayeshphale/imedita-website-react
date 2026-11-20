const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

function getWsUrl(port) {
  return new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:' + port + '/json/list', res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const list = JSON.parse(d);
          if (list && list.length > 0 && list[0].webSocketDebuggerUrl) {
            resolve(list[0].webSocketDebuggerUrl);
          } else {
            reject(new Error('No ws url found'));
          }
        } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function sendCDP(ws, method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = Math.floor(Math.random() * 1000000);
    const handler = (event) => {
      const resp = JSON.parse(event.data);
      if (resp.id === id) {
        ws.removeEventListener('message', handler);
        if (resp.error) reject(new Error(JSON.stringify(resp.error)));
        else resolve(resp.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function test() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--remote-debugging-port=9998',
    '--headless=new',
    '--no-sandbox',
    '--window-size=1440,900',
    '--user-data-dir=C:\\temp\\chrome_test_nav',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const wsUrl = await getWsUrl(9998);
  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

  await sendCDP(ws, 'Page.enable');
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/blog/aws-certification-cost' });
  await new Promise(r => setTimeout(r, 3000));

  // Test across multiple screen widths
  const widths = [1920, 1536, 1440, 1366, 1280, 1240, 1100, 1024, 768];
  
  for (const w of widths) {
    await sendCDP(ws, 'Emulation.setDeviceMetricsOverride', {
      width: w,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });
    // Scroll down to make subnav sticky
    await sendCDP(ws, 'Runtime.evaluate', { expression: 'window.scrollTo(0, 700);' });
    await new Promise(r => setTimeout(r, 500));

    const result = await sendCDP(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const nav = document.querySelector('nav[aria-label="Course section navigation"]');
        if (!nav) return { error: 'nav not found' };
        const brand = nav.querySelector('div[class*="brandPill"]');
        const track = nav.querySelector('div[class*="navTrack"]');
        const firstLink = track ? track.querySelector('a') : null;
        const bRect = brand ? brand.getBoundingClientRect() : null;
        const tRect = track ? track.getBoundingClientRect() : null;
        const fRect = firstLink ? firstLink.getBoundingClientRect() : null;
        const bDisp = brand ? window.getComputedStyle(brand).display : 'none';
        
        let overlap = false;
        if (bDisp !== 'none' && bRect && fRect) {
          overlap = bRect.right > fRect.left;
        }

        return {
          width: window.innerWidth,
          brandDisplay: bDisp,
          brandRight: bRect ? bRect.right : null,
          firstLinkLeft: fRect ? fRect.left : null,
          overlap,
          firstLinkText: fRect ? firstLink.innerText.trim() : null
        };
      })()`,
      returnByValue: true
    });

    console.log(JSON.stringify(result.result.value));
  }

  // Also capture screenshot at 1440 and 1366
  await sendCDP(ws, 'Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false });
  await sendCDP(ws, 'Runtime.evaluate', { expression: 'window.scrollTo(0, 700);' });
  await new Promise(r => setTimeout(r, 600));
  const ss1440 = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 74, width: 1440, height: 70, scale: 1 } });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/sticky_nav_1440.png', Buffer.from(ss1440.data, 'base64'));

  await sendCDP(ws, 'Emulation.setDeviceMetricsOverride', { width: 1366, height: 900, deviceScaleFactor: 2, mobile: false });
  await sendCDP(ws, 'Runtime.evaluate', { expression: 'window.scrollTo(0, 700);' });
  await new Promise(r => setTimeout(r, 600));
  const ss1366 = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 74, width: 1366, height: 70, scale: 1 } });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/sticky_nav_1366.png', Buffer.from(ss1366.data, 'base64'));

  ws.close();
  chrome.kill();
  console.log('Done testing!');
}

test().catch(e => console.error(e));
