const test = require('node:test');
const assert = require('node:assert');
const app = require('./server');

test('GET /health returns ok', async () => {
  const server = app.listen(0);
  const res = await fetch(`http://localhost:${server.address().port}/health`);
  assert.strictEqual(res.status, 200);
  server.close();
});
