/*@author Narendra Phadke
*Desc Campaign Controller 
*/
var express = require('express');
var router = express.Router();

/*@author Narendra Phadke
*Desc Create Campaign Basic Details Insert
*/
router.post('/createCampaign', function(req, res, next) {
	// res.locals.connection.query('insert into members(name,surname,email) values("Narendra","Phadke","narendra.phadke@apssmedia.com")', function (error, results, fields) {
		 res.locals.connection.query('insert into members values('+req.body.campaignName+','+req.body.industry+')', function (error, results, fields) {
	   console.log("Control on campaign page backend");
		 if(error) throw error;
		 res.send(JSON.stringify(results));
	 });
 });

module.exports = router;