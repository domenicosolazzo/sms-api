var express = require('express');
var Router = express.Router;

/// Routes
var home = require('./home')(Router);
var api = require('./api')(Router);

module.exports = function(app){
	app.use('/', home);
	app.use('/api', api);
}