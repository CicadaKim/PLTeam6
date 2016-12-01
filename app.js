/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// document conversion
var conversion = require('/routes/conversion');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.use(conversion);

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

/*
compile 'com.ibm.watson.developer_cloud:java-sdk:3.3.0'
DocumentConversion service = new DocumentConversion("2016-11-29");
service.setUsernameAndPassword("{Team6}","{ghtjd3064}");
// I just put these three lines of code, just for testing...
// these 3 lines are from document conversation api reference. - PandaTim
*/
