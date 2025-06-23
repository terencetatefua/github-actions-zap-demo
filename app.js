const express = require('express');
const app = express();
const port = 3000;

// ✅ High-risk XSS (reflected), now with form so ZAP finds it
app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`
    <h1>Hello, ${name}</h1>
    <form action="/" method="GET">
      <input type="text" name="name" placeholder="Enter your name" />
      <button type="submit">Say Hi</button>
    </form>
  `);
});

app.listen(port, () => {
  console.log(`🚨 Vulnerable app listening at http://localhost:${port}`);
});
