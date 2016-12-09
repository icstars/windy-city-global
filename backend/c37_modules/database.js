"use strict";

var pg = require('pg');
var connectionString = "postgres://ubuntu:icstars@localhost:5432";

module.exports = function() {
  return {
    executeQuery: function(query, callback){
      pg.connect(connectionString, function(err, client, done) {
        if(err) {
          return console.log('error fetching client from pool', err);
        }
        client.query(query, function(err, result) {
          //call `done()` to release the client back to the pool
          done();

          if(err) {
            return console.log('error running query', err);
          }

          if(callback){
            callback(result.rows);
          }
          return;
        });
      });
    }
  }
}();
