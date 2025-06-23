const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Secure Node App</h1>');
});

// ❌ Vulnerable to reflected XSS
app.get('/vuln', (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello ${name}</h1>`); // ⚠️ No sanitization
});

// ✅ Bind to 0.0.0.0 so app is accessible externally (via port 3000)
app.listen(port, '0.0.0.0', () => {
  console.log(`App running at http://0.0.0.0:${port}`);
});
