
var express =require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

var fs = require('fs');

router.get('/conversion',function(req,res,next){
	var document_conversion = watson.document_conversion({
		username:     '571ca2ba-2084-490a-912e-5b5274419d15',
		password:     'vAlnKuRmSLoQ',
		version:      'v1',
		version_date: '2015-12-15'
	});
	
	// custom configuration
	var config = {
		word: {
			heading: {
				fonts: [
					{ level: 1, min_size: 24 },
					{ level: 2, min_size: 16, max_size: 24 }
				]
			}
		}};
		
	var result;	
	document_conversion.convert({
		file: fs.createReadStream('SCORING.docx'),
		conversion_target: 'ANSWER_UNITS',
		// Use a custom configuration.
		config: config
		}, function (err, response) {
		if (err) {
			console.error(err);
		} else {
			res.json(JSON.stringify(response, null, 2));
			//console.log(JSON.stringify(response, null, 2));
		}
	});		
	
	
});

module.exports = router;
