const express = require('express');
const app = express();
const port = 3000;

// Utility function to escape HTML special characters
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ✅ Secure endpoint with escaped input
app.get('/', (req, res) => {
  const rawName = req.query.name || 'World';
  const name = escapeHtml(rawName); // ✅ Escape input before rendering
  res.send(`
    <h1>Hello, ${name}</h1>
    <form action="/" method="GET">
      <input type="text" name="name" placeholder="Enter your name" />
      <button type="submit">Say Hi</button>
    </form>
  `);
});

app.listen(port, () => {
  console.log(`✅ Secure app listening at http://localhost:${port}`);
});