var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8090');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static('public'));

app.use(express.json()); // for parsing application/json, this works only when Content-Length in reuqest headers is specified
//app.use(bodyParser.json()); // this works like string above
app.use(bodyParser.urlencoded({ extended: true })); // this works for parsing application/x-www-form-urlencoded: for hot weather widget

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/a', function (req, res) {
  res.send('You will get /a');
});

app.get('/book/ebook', function (req, res) {
  res.send('You will get /book/ebook');
});


app.get('/products', function (req, res) {
  console.log('asked for /products');
  res.sendFile(__dirname + '/products.json');
  //res.send(`
  //  [{
  //    "title": "Обои",
  //    "serial": 1045,
  //    "author": "From Mental",
  //    "price": 1500.85,
  //    "src": "assets/img/img1.jpg"
  //  }]
  //  `);
});

app.get('/products/1', function (req, res) {
  console.log('asked for /products/1');
  res.send(`
    {
      "_id": "1",
    "title": "Обои",
    "serial": 1045,
    "author": "From Mental",
    "price": 1500.85,
    "src": "assets/img/img1.jpg"
   }
   `);
    
});

app.post('/api/endpoint', function (req, res) {
  //console.log(req.query.rq); // for .get method this works
  //console.log(req.body); // works, if app.use(bodyParser.urlencoded({ extended: true })); was //called
  console.log(req.body.rq); // more specific
  var jsonAnswer = 
    [
    {
    "_id": "1",
    "title": "Обои",
    "serial": 1045,
    "author": "From Mental",
    "price": 1500.85,
    "src": "assets/img/img1.jpg"
   }
  ,{
    "_id": "2",
    "title": "Носки",
    "serial": 104511,
    "author": "OSTIN",
    "price": 15.00,
    "src": "assets/img/img1.jpg"
   }
  ,{
    "_id": "3",
    "title": "Штаны",
    "serial": 10488511,
    "author": "Wrangler",
    "price": 7000.00,
    "src": "assets/img/img1.jpg"
   }
  ,{
    "_id": "4",
    "title": "Трусы",
    "serial": 104595,
    "author": "SELA MEN",
    "price": 80.00,
    "src": "assets/img/img1.jpg"
   }
   ]
   ;
  res.send(jsonAnswer.filter(x => x.author.toUpperCase().indexOf(req.body.rq.toUpperCase()) > -1));
});

app.post('/api/isimple', function (req, res) {
  // body of HTTP request contains string {"clientRef": "1", "login": "иван", "passwd": "муля", "eventId": "123"}
  // here it is already parsed into JS [object Object], so we use JSON.stringify to show it as
  // string again
  console.log('Requested /api/isimple: ' + JSON.stringify(req.body));
  console.log('clientRef: ' + req.body.clientRef);
  console.log('login: ' + req.body.login);
  console.log('passwd: ' + req.body.passwd);
  console.log('eventId: ' + req.body.eventId);
  var jsonAnswer = {"status": "ok"};
  res.send(jsonAnswer); // status 200 OK
  //res.status(404).send('Sorry, something went wrong...'); // this is how to send 404 answer
});

app.listen(8090, function () {
  console.log('Example app listening on port 8090!');
});
