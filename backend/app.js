var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

//Set up to render the views correctly from the views folder
app.set('html', __dirname.replace('backend', 'frontend') + '/html');
app.set('views', __dirname.replace('backend', 'frontend') + '/html');

//This allows for the js/ and css/ files to be served
app.use(express.static(__dirname.replace('backend', 'frontend')));

//This specifies what templating engine to use
app.engine('html', require('ejs').renderFile);

//Set up to use all the routes from router.js
var router = require('./routes');
app.use('/', router);

app.listen(port, function(){
  console.log("Application is up and running successfully");
  console.log("Listening on " + port);
});
