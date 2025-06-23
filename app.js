const express = require('express');
const app = express();
const port = 3000;

// Simple XSS-vulnerable endpoint
app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`<h1>Hello, ${name}</h1>`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
