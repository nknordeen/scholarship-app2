var express = require('express');
var app = express();
var port = 8081;
app.use(express.static(__dirname + 'views/css'));
app.set('views', './views');
app.set('view engine', 'ejs');
var data = [
  {
    name: 'Crescent Electric Supply Company\'s \"Energy Efficient\" Scholarship',
    amount: 1000,
    description: 'If you are currently enrolled in college or headed there in 2017 and want to win a $1000 scholarship to help cover expenses, consider entering the Crescent Electric College Scholarship Contest. Crescent Electric Supply Company will award a $1000 scholarship to a highly motivated student who can thoughtfully share a photo of their effort to minimize energy usage on social media.'
  }
];

app.get('/', function(req, res) {
    res.render('index', {scholarships: data});
});

app.listen(process.env.PORT || port, function() {
  console.log(`Listening on port ${process.env.PORT || port}`);
});
