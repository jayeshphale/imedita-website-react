const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

function getWsUrl(port) {
  return new Promise((res, rej) => {
    http.get('http://127.0.0.1:' + port + '/json/list', r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => res(JSON.parse(d)[0].webSocketDebuggerUrl));
    }).on('error', rej);
  });
}

function sendCDP(ws, method, params = {}) {
  return new Promise((res, rej) => {
    const id = Math.floor(Math.random() * 1000000);
    const handler = (event) => {
      const resp = JSON.parse(event.data);
      if (resp.id === id) {
        ws.removeEventListener('message', handler);
        res(resp.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function snapSuccess() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--remote-debugging-port=9992',
    '--headless=new',
    '--no-sandbox',
    '--window-size=1440,900',
    '--user-data-dir=C:\\temp\\chrome_snap_success',
    'about:blank'
  ]);
  await new Promise(r => setTimeout(r, 1500));
  const wsUrl = await getWsUrl(9992);
  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

  await sendCDP(ws, 'Page.enable');
  await sendCDP(ws, 'Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false });
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/contact' });
  await new Promise(r => setTimeout(r, 2000));

  await sendCDP(ws, 'Runtime.evaluate', {
    expression: `(() => {
      const setVal = (el, val, isTextarea = false) => {
        const proto = isTextarea ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
        const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
        setter.call(el, val);
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      };
      setVal(document.getElementById('contact-name'), 'Aarav Deshmukh');
      setVal(document.getElementById('contact-email'), 'aarav.deshmukh@gmail.com');
      setVal(document.getElementById('contact-phone'), '9822012345');
      setVal(document.getElementById('contact-message'), 'Hello, looking forward to the CCNA course demo session.', true);
      document.querySelector('button[type="submit"]').click();
    })()`
  });

  await new Promise(r => setTimeout(r, 1000));
  await sendCDP(ws, 'Runtime.evaluate', { expression: `document.getElementById('contact-form').scrollIntoView({ behavior: 'instant' });` });
  await new Promise(r => setTimeout(r, 500));

  const ss = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/contact_form_success_view.png', Buffer.from(ss.data, 'base64'));

  ws.close();
  chrome.kill();
  console.log('Saved contact_form_success_view.png');
}
snapSuccess().catch(console.error);
