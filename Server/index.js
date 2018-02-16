var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var list = require('../database');
var {save, selectAll} = require('../database')

var app = express();


app.use(bodyParser.json())
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));

app.post('/', function(req, res){
  console.log('cats')
})

app.get('/',function (req,res){

})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
