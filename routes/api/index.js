var apiHome = function(req, res){
	res.json({ message: 'Welcome to the sms api'});
};

var sendSms = function(req, res){
	res.json({ message: 'Sending a sms!' });
};

module.exports = function(Router){
	var router = Router();
	router.get('/', apiHome);
	router.get('/sms/send/', sendSms);
	
	return router;
}