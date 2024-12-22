const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Node/Express!');
});

app.listen(3001, () => {
  console.log('Node server running on http://localhost:3001');
});
