const express = require('express');
const path = require('path');
const consign = require('consign');
const port = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

consign({})
  .include('models')
  .then('services')
  .then('routes')
  .into(app)
;

app.listen(port, () => console.log('Server running'))