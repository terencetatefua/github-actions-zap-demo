// app.js
const express = require('express');
const app = express();
const port = 3000;

// 🚨 Reflected XSS vulnerability
app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`<h1>Hello, ${name}</h1>`); // ❌ XSS
});

app.listen(port, () => {
  console.log(`🚨 Vulnerable app running at http://localhost:${port}`);
});
