### Making a router

We created a directory called `/routers` were you can create routers for the different html pages. The idea is that every router will have the single responsibilty for each page. When you create a router you will need to use the `router.get('route', callbackFn())` or `router.post('route', callbackFn())` to make the backend serve your html page, results from a database query, or inserting data into the database. Examples of this are seen in `routers/helloworld.js` and `routers/trainsList.js`.

The following is a template of what the file will look like. You will need to make sure you have these for everything to work correctly.

>```javascript
>'use strict';
>
>var router = require('express').Router();
>var database = require('../c35_modules/database');
>module.exports = function() {
>  
> 	//put your router code here.
>
>	return router
>}();
>```

#### Types of routes
I thought I would highlight the types of routes you will need to make for your application to work. These are the main cases

1) Make your html render (get request)

>```javascript
> router.get('/nameOfYourRoute', function (req, res) {
>    return res.render('nameOfYourHtmlFile.html');
> });
>```

2) Put something in your database (post request)

>```javascript
> router.post('/nameOfYourRoute', function(req,res){
>   var query = "query string"
>   database.executeQuery(query);
>   return res.send("success"); // you can check in your ajax that the request was successful
> });
>```

3) Get data from your database (get request)

>```javascript
> router.get('/trains', function(req,res){
>  	var query = "query string"
>   database.executeQuery(query, function(results) {
>     res.send(results);
>   });
> });
>```

A special note for this last request. Callbacks can be a little tricky but if you copy/paste this code and fill in the query string you should be able to get data out of your database.
