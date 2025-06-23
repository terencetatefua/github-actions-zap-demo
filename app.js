const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Default route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Secure Node App</h1>');
});

// ❌ Reflected XSS vulnerability
app.get('/vuln', (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello ${name}</h1>`); // ⚠️ Input not sanitized!
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
