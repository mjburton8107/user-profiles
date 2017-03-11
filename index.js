var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js')

var app = express();

app.use(bodyParser.json());

app.listen(3000, function(){
  console.log('now listening on port 3000')
})

var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret }));


app.post('/api/login', userCtrl.login)
