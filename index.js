var express = require('express');
var bodyParser = require('body-parser');
var app = express();
calculateMoneyForSecond = require('./logic/bet');

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { formArray: [], oddsArray : []});
});

app.post('/', (req, res, next) => { 
    let formArray = [req.body.firstOdd, req.body.secondOdd, req.body.firstMoney]
    let oddsArray = calculateMoneyForSecond(Number(req.body.firstMoney), Number(req.body.firstOdd), Number(req.body.secondOdd));
    console.log(oddsArray);
    res.render('index', { formArray, oddsArray })
});


app.use(express.static(`${__dirname}/public`));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});