const express = require('express');
const app = express();
const port = 3000;
const host = "0.0.0.0.";

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to CI/CD Demo</h1>
    <p>This page is rendered from the latest deployment from staging test!</p>
  `);
});

app.get('/juhomi', (req, res) => {
  res.send(`
    <h1>Welcome to JUHOMI</h1>
    <p>This is a demo for CI/CD!</p>
  `);
});

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
