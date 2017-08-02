module.exports = function(app){
	
	app.post('/reserve', function(req, res){

		for (var i = 0; i < table_data.length; i++) {
			if (table_data.length > 4) {
			
				fs.appendFile('waitinglist-data.js', req.body);

				return false;

			} else {

				fs.appendFile('table-data.js', req.body);

				return true;

			}
		}

	newres.email;

	console.log(newres);

	characters.push(newres);

	res.json(newres);
});
}