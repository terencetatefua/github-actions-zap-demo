const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Default route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Secure Node App</h1>');
});

// Intentional XSS vulnerability
app.get('/vuln', (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello ${name}</h1>`); // 🔥 Vulnerable: unsanitized input
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});