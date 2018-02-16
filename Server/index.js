var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));




app.listen(3000, function() {
  console.log('listening on port 3000!');
});
