var express = require('express');
var bodyParser = require('body-parser');
var list = require('../database/index.js');
var {save, selectAll, faves, saves} = require('../database')
var axios = require('axios')
var apiUrl = "https://pokeapi.co/api/v2/pokemon/"
var app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

var getPokemonName = function(name, cb){
    axios.get(apiUrl + name)
    .then(function (response) {
      let name = response.data.forms[0].name;
      let img = response.data.sprites.front_default;
      let id = response.data.id;
      let like = false;
      let result = {
        name: name,
        img: img,
        id: id,
        like: like
      }
      cb(result)
    })
    .catch(response => {
      console.log(response)
    })
}
var addName = function(name, cb){
  axios.get(apiUrl + name)
  .then(function (response){
    let name = response.data.forms[0].name;
    let img = response.data.sprites.front_default;
    let id = response.data.id;
    let like = true;
    let result = {
      name: name,
      img: img,
      id: id,
      like: like
    }
    cb(result)
  })
  .catch(response => {
    console.log(response)
  })
}

app.post('/', function(req, res){
  getPokemonName(req.body.name, (result) => {
    save(result)
  })
  res.end()
})

app.post('/fave', function(req,res){
  addName(req.body.name, (result) => {
    saves(result)
  })
  res.end()
})

app.get('/data' ,function (req,res){
  selectAll()
     .then((data)=>{
       res.send(data)
     })
})
app.get('/fave', function(req, res){
  faves()
    .then((data)=>{
      res.send(data)
    })
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
