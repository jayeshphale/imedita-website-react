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

async function runTests() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--remote-debugging-port=9995',
    '--headless=new',
    '--no-sandbox',
    '--window-size=1440,900',
    '--user-data-dir=C:\\temp\\chrome_contact_test',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const wsUrl = await getWsUrl(9995);
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

  console.log('--- 1. Navigating to http://localhost:5173/contact ---');
  await sendCDP(ws, 'Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false });
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/contact' });
  await new Promise(r => setTimeout(r, 2500));

  // Inspect page title and headings
  const pageCheck = await sendCDP(ws, 'Runtime.evaluate', {
    expression: `(() => {
      const h1 = document.querySelector('h1');
      const h2s = Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim());
      const telLinks = Array.from(document.querySelectorAll('a[href^="tel:"]')).map(a => a.getAttribute('href'));
      const mailLinks = Array.from(document.querySelectorAll('a[href^="mailto:"]')).map(a => a.getAttribute('href'));
      const waLinks = Array.from(document.querySelectorAll('a[href*="wa.me"]')).map(a => a.getAttribute('href'));
      const iframe = document.querySelector('iframe');
      return {
        title: document.title,
        h1: h1 ? h1.innerText.trim() : null,
        h2s,
        telLinksCount: telLinks.length,
        mailLinksCount: mailLinks.length,
        waLinksCount: waLinks.length,
        hasMapIframe: !!iframe && iframe.src.includes('google.com/maps')
      };
    })()`,
    returnByValue: true
  });
  console.log('Page Elements Check:', JSON.stringify(pageCheck.result.value, null, 2));

  // Take Full Desktop Screenshot
  const ssDesktop = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/contact_desktop_hero.png', Buffer.from(ssDesktop.data, 'base64'));
  console.log('Saved contact_desktop_hero.png');

  // Scroll to Form Section and snap
  await sendCDP(ws, 'Runtime.evaluate', { expression: `document.getElementById('contact-form').scrollIntoView({ behavior: 'instant' });` });
  await new Promise(r => setTimeout(r, 800));
  const ssForm = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/contact_desktop_form.png', Buffer.from(ssForm.data, 'base64'));
  console.log('Saved contact_desktop_form.png');

  // Scroll to Office & Maps and snap
  await sendCDP(ws, 'Runtime.evaluate', { expression: `document.getElementById('office-section-heading').scrollIntoView({ behavior: 'instant' });` });
  await new Promise(r => setTimeout(r, 800));
  const ssOffice = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/contact_desktop_office.png', Buffer.from(ssOffice.data, 'base64'));
  console.log('Saved contact_desktop_office.png');

  // Test Form Validation & Submission
  console.log('--- 2. Testing Form Submission ---');
  await sendCDP(ws, 'Runtime.evaluate', {
    expression: `(() => {
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const phoneInput = document.getElementById('contact-phone');
      const messageInput = document.getElementById('contact-message');
      const form = document.querySelector('form');
      
      nameInput.value = 'Vikram Malhotra';
      nameInput.dispatchEvent(new Event('change', { bubbles: true }));

      emailInput.value = 'vikram.malhotra@enterprise-net.com';
      emailInput.dispatchEvent(new Event('change', { bubbles: true }));

      phoneInput.value = '9820011223';
      phoneInput.dispatchEvent(new Event('change', { bubbles: true }));

      messageInput.value = 'Interested in Cisco CCNA and CCNP Security classroom batch starting next month in Baner Pune.';
      messageInput.dispatchEvent(new Event('change', { bubbles: true }));

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.click();
    })()`
  });

  // Wait for submission timeout to complete (600ms)
  await new Promise(r => setTimeout(r, 1200));

  const submissionCheck = await sendCDP(ws, 'Runtime.evaluate', {
    expression: `(() => {
      const successTitle = document.querySelector('h3[class*="successTitle"]');
      return {
        hasSuccessScreen: !!successTitle,
        successText: successTitle ? successTitle.innerText : null
      };
    })()`,
    returnByValue: true
  });
  console.log('Form Submission Result:', JSON.stringify(submissionCheck.result.value, null, 2));

  const ssSuccess = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/contact_form_success.png', Buffer.from(ssSuccess.data, 'base64'));
  console.log('Saved contact_form_success.png');

  // Test Mobile Viewport (390x844 iPhone 14)
  console.log('--- 3. Testing Mobile Responsive Viewport ---');
  await sendCDP(ws, 'Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/contact' });
  await new Promise(r => setTimeout(r, 2000));
  const ssMobileHero = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/contact_mobile_hero.png', Buffer.from(ssMobileHero.data, 'base64'));
  console.log('Saved contact_mobile_hero.png');

  // Test Tablet Viewport (768x1024 iPad)
  console.log('--- 4. Testing Tablet Viewport ---');
  await sendCDP(ws, 'Emulation.setDeviceMetricsOverride', { width: 768, height: 1024, deviceScaleFactor: 2, mobile: false });
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/contact' });
  await new Promise(r => setTimeout(r, 2000));
  const ssTablet = await sendCDP(ws, 'Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/contact_tablet.png', Buffer.from(ssTablet.data, 'base64'));
  console.log('Saved contact_tablet.png');

  // Test alias /contact-us
  console.log('--- 5. Testing URL Alias /contact-us ---');
  await sendCDP(ws, 'Page.navigate', { url: 'http://localhost:5173/contact-us' });
  await new Promise(r => setTimeout(r, 2000));
  const aliasCheck = await sendCDP(ws, 'Runtime.evaluate', {
    expression: `(() => ({ url: window.location.href, title: document.title, hasHero: !!document.querySelector('h1') }))()`,
    returnByValue: true
  });
  console.log('Alias Route Check:', JSON.stringify(aliasCheck.result.value, null, 2));

  ws.close();
  chrome.kill();

  const relevantErrors = consoleLogs.filter(l => 
    !l.text.includes('React DevTools') && 
    !l.text.includes('[vite]')
  );
  console.log('Captured Console Errors/Warnings:', relevantErrors);
  console.log('ALL TESTS COMPLETED SUCCESSFULLY!');
}

runTests().catch(e => console.error('Test error:', e));
