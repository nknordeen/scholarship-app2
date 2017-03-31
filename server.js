var express = require('express');
var app = express();
var port = 8081;
app.set('views', './views');
app.set('view engine', 'ejs');

var data = [
  {
    name: 'scholarship 1',
    amount: 3000,
    description: 'description 1'
  },
  {
    name: 'scholarship 2',
    amount: 3000,
    description: 'description 2'
  },
  {
    name: 'scholarship 3',
    amount: 5000,
    description: 'description 3'
  },
  {
    name: 'scholarship 4',
    amount: 10000,
    description: 'description 4'
  }
];

app.get('/', function(req, res) {
    res.render('index', {scholarships: data});
});

app.listen(process.env.PORT || port, function() {
  console.log(`Listening on port ${process.env.PORT || port}`);
});
