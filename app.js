const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to CI/CD Demo</h1>
    <p>This page is rendered from the latest deployment from staging!</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
