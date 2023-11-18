const express = require('express');
const app = express();
const port = 3000;
const products = [
  { id: '0', price: 100 },
  { id: '1', price: 101 }
]

app.get('/', (req, res, next) => {
  return res.status(200).send('What up!');
});

app.get('/products', (req, res, next) => {
  return res.status(200).send(products);
});

app.listen(port, () => {
  console.log('app ready!');
});