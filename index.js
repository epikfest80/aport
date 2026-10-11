const express = require('express');
const app = express();
const port = 3000;

// Базовий endpoint
app.get('/', (req, res) => {
  res.send('Welcome to Lab 2 REST API!');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});