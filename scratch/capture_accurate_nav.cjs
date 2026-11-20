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

async function captureNav() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--remote-debugging-port=9997',
    '--headless=new',
    '--no-sandbox',
    '--window-size=1440,900',
    '--user-data-dir=C:\\temp\\chrome_cap_nav',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const wsUrl = await getWsUrl(9997);
  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

  await sendCDP(ws, 'Page.enable');
  await sendCDP(ws, 'Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false });
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/blog/aws-certification-cost' });
  await new Promise(r => setTimeout(r, 3000));

  await sendCDP(ws, 'Runtime.evaluate', { expression: 'window.scrollTo(0, 750);' });
  await new Promise(r => setTimeout(r, 800));

  const rect = await sendCDP(ws, 'Runtime.evaluate', {
    expression: `(() => {
      const nav = document.querySelector('nav[aria-label="Course section navigation"]');
      if (!nav) return null;
      const r = nav.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    })()`,
    returnByValue: true
  });

  console.log('Nav rect:', rect.result.value);

  if (rect.result.value) {
    const r = rect.result.value;
    const ss = await sendCDP(ws, 'Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: Math.max(0, r.y - 10), width: 1440, height: r.height + 20, scale: 1 }
    });
    fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/sticky_nav_accurate.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved sticky_nav_accurate.png');
  }

  ws.close();
  chrome.kill();
}

captureNav().catch(e => console.error(e));
