## Random Useful Things

### console.log

This is the most useful thing to use in my opinion. You can use this to help you figure out what is going wrong. If you going to ask a question one of the first things we might ask you what is this printing out. You can use this for both frontend and backend debugging.

If you want to play around with this (and something that will help when putting something into a database) you can put it in `routers/helloworld.js` like the following:

```javascript
router.post('/trains', function(req, res){
    console.log(req.body);
});
```

When you do this make a request to `'/train'` and look in your terminal and see what happens.
