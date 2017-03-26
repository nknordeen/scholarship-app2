var express = require('express');
var app = express();
var port = 8080;
app.set('views', './views');
app.set('view engine', 'ejs');

var data = [
  {
    name: 'scholarship 1',
    amount: 3000,
    description: 'description 1'
  },
  {
    name: 'scholarship 1',
    amount: 3000,
    description: 'description 1'
  },
  {
    name: 'scholarship 3',
    amount: 5000,
    description: 'description 3'
  }
];

app.get('/', function(req, res) {
    res.render('index', {scholarships: data});
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
