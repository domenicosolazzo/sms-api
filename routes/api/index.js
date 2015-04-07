// Twilio tokens
var ACCOUNT_SID = process.env.ACCOUNT_SID || 'ACxxxxx';
var AUTH_TOKEN = process.env.AUTH_TOKEN || 'xxxxx';
var NUMBER_FROM = process.env.NUMBER_FROM || '+1';

var client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

var apiHome = function(req, res){
	res.json({ message: 'Welcome to the sms api'});
};

var sendSms = function(req, res){
	var numberTo = req.body.to;
	var message = req.body.message;

	client.sendMessage({
		to: numberTo,
		from: NUMBER_FROM,
		body: message
	}, function(err, responseData){
		var result = {
			error: err? true:false,
			errorMessage: err,
			data: responseData?responseData: null
		};
		res.json(result);
	});
};

module.exports = function(Router){
	var router = Router();
	router.get('/', apiHome);
	router.post('/sms/send/', sendSms);

	return router;
}