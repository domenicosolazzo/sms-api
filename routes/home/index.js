module.exports = function(Router){
	var router = Router();
	router.get('/', function(req, res) {
    	res.json({ message: 'hooray! You are awesome!' });   
	});
	return router;
}