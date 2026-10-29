const express = require('express');
const app = express();
const BACKEND = process.env.BACKEND_URL || 'http://localhost:5000';

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/message', async (req, res) => {
  try {
    const r = await fetch(BACKEND + '/api/message');
    res.json(await r.json());
  } catch (e) {
    res.status(502).json({ error: 'backend unreachable' });
  }
});

app.get('/', (req, res) => {
  res.send(`<h1>Express Frontend (v1)</h1>
<p id="m">Loading from Flask...</p>
<script>fetch('/api/message').then(r=>r.json()).then(d=>document.getElementById('m').innerText=d.message||d.error)</script>`);
});

if (require.main === module) {
  app.listen(3000, '0.0.0.0', () => console.log('Express on 3000'));
}
module.exports = app;
