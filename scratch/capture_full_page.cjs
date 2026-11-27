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

async function capture() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--remote-debugging-port=9993',
    '--headless=new',
    '--no-sandbox',
    '--window-size=1440,900',
    '--user-data-dir=C:\\temp\\chrome_cap_full',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const wsUrl = await getWsUrl(9993);
  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

  await sendCDP(ws, 'Page.enable');

  // 1. Desktop Final CTA & Bottom
  console.log('Capturing Desktop Final CTA...');
  await sendCDP(ws, 'Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false });
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/contact' });
  await new Promise(r => setTimeout(r, 2000));

  await sendCDP(ws, 'Runtime.evaluate', { expression: `document.getElementById('final-cta-heading').scrollIntoView({ behavior: 'instant' });` });
  await new Promise(r => setTimeout(r, 800));
  const ssFinal = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/contact_desktop_final_cta.png', Buffer.from(ssFinal.data, 'base64'));

  // 2. Mobile Hero Updated
  console.log('Capturing Updated Mobile Hero...');
  await sendCDP(ws, 'Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/contact' });
  await new Promise(r => setTimeout(r, 2000));
  const ssMobileHero = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/contact_mobile_hero_v2.png', Buffer.from(ssMobileHero.data, 'base64'));

  // 3. Mobile Form & Promo
  console.log('Capturing Mobile Form & Promo...');
  await sendCDP(ws, 'Runtime.evaluate', { expression: `document.getElementById('contact-form').scrollIntoView({ behavior: 'instant' });` });
  await new Promise(r => setTimeout(r, 800));
  const ssMobileForm = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/contact_mobile_form.png', Buffer.from(ssMobileForm.data, 'base64'));

  ws.close();
  chrome.kill();
  console.log('Capture finished successfully!');
}

capture().catch(console.error);
