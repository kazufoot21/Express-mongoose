const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

mongoose
  .connect('mongodb://localhost:27017/movies', {
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

app.get('/dog', (req, res) => {
  res.send('wanwanwan');
});

app.listen(3000, () => {
  console.log('port3000');
});
