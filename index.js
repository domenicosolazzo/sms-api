var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var routes = require('./routes')(app);

// START THE SERVER
app.listen(port);
console.log('Hooray. The server started at localhost. Port:', port);
