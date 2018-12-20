var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * from members', function (error, results, fields) {
		if(error) throw error;
		console.log(results.JSON);
		res.send(JSON.stringify(results));

	});
});


router.post('/new', function(req, res, next) {
    res.locals.connection.query('insert into members(name,surname,email) values("Narendra","Phadke","narendra.phadke@apssmedia.com")', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;
