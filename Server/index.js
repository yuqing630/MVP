var express = require('express');
var bodyParser = require('body-parser');
const pokemon = require('pokemon')
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var list = require('../database');

var app = express();
app.use(bodyParser.json())
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));

app.post('/', function(req, res){
  pokemon.all()
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
