'use strict'

var router = require('express').Router();
var database = require('./c37_modules/database');

module.exports = function() {

  router.get('/', function(req,res){
    return res.render('helloworld.html');
  });

<<<<<<< HEAD
=======
router.get('/Tania', function(req,res){
    return res.render('Tania.html');
  });


router.get('/notifications', function(req,res){
    return res.render('notifications.html');
  });
  
router.get('/Settings', function(req,res){
    return res.render('Settings.html');
  });

>>>>>>> 0b7c4e09126e697515cd4fd75369a66b5f06c46a
  router.get('/trains', function(req,res){
    return res.render('trains.html');
  });

  router.get('/Tania', function(req,res){
    return res.render('trains.html');
  });
  
    router.get('/julian', function(req,res){
    return res.render('julian.html');
  });
  
  router.get('/trains/data', function(req,res){
    database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
    });
  });

  /* Your code here */

  return router
}();
