## The `backend` directory

Similar to the `frontend` folder we are trying to create less confusion through convention.


The folder structure a little non conventional because you might not necessarily name everything the same name in a project. I would encourage you to follow this format to make things easier as a mental model for your team to follow. After you have the project up and running then to try playing around with the structure of things. Ultimately your folder structure and code organization should be what makes the most sense for your team.

### `routes.js`

This is the only file you should have to modify in the "backend". You will need to add code where you see the comment `/* Your code here */`.

Here is where you will configure the routes of your application. The types of routes you will make are:

1. Render your html pages you put in the `/html` folder.
2. Interact with the data in your database. (Putting data in/Getting data out)

#### Rendering an html page
To get your html page to render you will need to use `router.get` to specify which html file you want to render when you type a particular route in your browser.

An example of this looks like:
```js
router.get('/<name of your route>', function(req,res){
	return res.render('<path to your views in the views folder>')
});
```

#### Getting data from your database

You can also use the `router.get` to return get data from your database. When you execute a database query you can pass a [callback]() that will return the results of your database query.

An example of this looks like:

```js
router.get('string with your route', function(req,res){
	database.executeQuery("query", function(results) {
 		res.send(results);
	});
});
```

#### Putting data into your database

You can also setup POST request to put data into a database. Like that pulling data out a database you will need to use the database object. You will want to execute a query and send back a message to let your "frontend" know you executed the query successfully


An example of this looks like:

```js
router.post('string with your route', function(req,res){
	var query = "query string";
	database.executeQuery(query);
	return res.send("success");
});
```

### `app.js`

You will not need to modify this file. This file is really all you need to get your node/express app up and running. If you want to learn more you should check out [expressjs]().


### `/c37_modules` directory

These are abstractions or things that you don't need to worry about. If you have your application working and want to dive more into making "modules" reach out to Dan LaFeir to learn more.
