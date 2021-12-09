const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');

mongoose
  .connect('mongodb://localhost:27017/farmStand', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connection ok.');
  })
  .catch((e) => {
    console.log('MongoDB connection error');
    console.log(e);
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.render('products/index', { products });
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/detail', { product });
});

app.listen(3000, () => {
  console.log('port3000');
});
