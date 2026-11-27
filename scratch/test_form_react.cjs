const { spawn } = require('child_process');
const http = require('http');

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

async function testForm() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--remote-debugging-port=9994',
    '--headless=new',
    '--no-sandbox',
    '--window-size=1440,900',
    '--user-data-dir=C:\\temp\\chrome_form_test',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const wsUrl = await getWsUrl(9994);
  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

  await sendCDP(ws, 'Page.enable');
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/contact' });
  await new Promise(r => setTimeout(r, 2000));

  const formResult = await sendCDP(ws, 'Runtime.evaluate', {
    expression: `(() => {
      const setVal = (el, val, isTextarea = false) => {
        const proto = isTextarea ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
        const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
        setter.call(el, val);
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      };

      const name = document.getElementById('contact-name');
      const email = document.getElementById('contact-email');
      const phone = document.getElementById('contact-phone');
      const message = document.getElementById('contact-message');

      setVal(name, 'Aarav Deshmukh');
      setVal(email, 'aarav.deshmukh@gmail.com');
      setVal(phone, '9822012345');
      setVal(message, 'Hello, I want to attend Cisco CCNA demo class on weekend.', true);

      const submitBtn = document.querySelector('button[type="submit"]');
      submitBtn.click();
      return { clicked: true };
    })()`,
    returnByValue: true
  });

  console.log('Form clicked:', formResult.result.value);
  await new Promise(r => setTimeout(r, 1000));

  const check = await sendCDP(ws, 'Runtime.evaluate', {
    expression: `(() => {
      const successTitle = document.querySelector('h3[class*="successTitle"]');
      const successDesc = document.querySelector('p[class*="successDesc"]');
      return {
        hasSuccess: !!successTitle,
        title: successTitle ? successTitle.innerText : null,
        desc: successDesc ? successDesc.innerText : null
      };
    })()`,
    returnByValue: true
  });

  console.log('Result:', JSON.stringify(check.result.value, null, 2));

  ws.close();
  chrome.kill();
}

testForm().catch(console.error);
