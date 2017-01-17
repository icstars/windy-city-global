'use strict'

var router = require('express').Router();
var database = require('./c37_modules/database');

module.exports = function() {

  router.get('/', function(req,res){
    return res.render('helloworld.html');
  });

router.get('/Tania', function(req,res){
    return res.render('Tania.html');
  });


router.get('/notifications', function(req,res){
    return res.render('notifications.html');
  });
  
router.get('/Settings', function(req,res){
    return res.render('Settings.html');
  });

  router.get('/trains', function(req,res){
    return res.render('trains.html');
  });

  router.get('/trains/data', function(req,res){
    database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
    });
  });

  /* Your code here */
/*router.post('/trains/date', function,(req, res){
  dcatabase.executeQuery("insert into trains (trainnumber, lineColor, inservice")
}*/
  return router
}();
