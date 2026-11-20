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

async function verify() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--remote-debugging-port=9996',
    '--headless=new',
    '--no-sandbox',
    '--window-size=1440,900',
    '--user-data-dir=C:\\temp\\chrome_verify_clean',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const wsUrl = await getWsUrl(9996);
  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

  const consoleLogs = [];
  ws.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    if (data.method === 'Runtime.consoleAPICalled') {
      const type = data.params.type;
      const text = data.params.args.map(a => a.value || a.description || '').join(' ');
      consoleLogs.push({ type, text });
    }
  });

  await sendCDP(ws, 'Runtime.enable');
  await sendCDP(ws, 'Page.enable');

  console.log('--- Testing /courses/ccna-training ---');
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/courses/ccna-training' });
  await new Promise(r => setTimeout(r, 3500));

  // Scroll down so batches table mounts
  await sendCDP(ws, 'Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight / 2);' });
  await new Promise(r => setTimeout(r, 1500));
  await sendCDP(ws, 'Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight);' });
  await new Promise(r => setTimeout(r, 1500));

  console.log('--- Testing / ---');
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/' });
  await new Promise(r => setTimeout(r, 3000));

  console.log('--- Testing /blog/aws-certification-cost ---');
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/blog/aws-certification-cost' });
  await new Promise(r => setTimeout(r, 3000));

  ws.close();
  chrome.kill();

  console.log('All Captured Console Messages:');
  const relevant = consoleLogs.filter(l => 
    !l.text.includes('React DevTools') && 
    !l.text.includes('[vite]')
  );
  console.log(JSON.stringify(relevant, null, 2));

  const hasMetaError = consoleLogs.some(l => l.text.includes('<meta> cannot be a child of <tr>'));
  const hasClockWarning = consoleLogs.some(l => l.text.includes('THREE.Clock: This module has been deprecated'));

  console.log('Verification Summary:');
  console.log('Has <meta> in <tr> error:', hasMetaError);
  console.log('Has THREE.Clock warning:', hasClockWarning);
}

verify().catch(e => console.error(e));
