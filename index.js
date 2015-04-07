var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var apiRouter = express.Router();              
var indexRouter = express.Router();

indexRouter.get('/', function(req, res) {
    res.json({ message: 'hooray! You are awesome!' });   
});

apiRouter.get('/', function(req, res) {
    res.json({ message: 'Awesome! You are in the SMS API!' });   
});


app.use('/', indexRouter);
app.use('/api', apiRouter);

// START THE SERVER
app.listen(port);
console.log('Hooray. The server started at localhost. Port:', port);
