var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var list = require('../database/index.js');
var {save, selectAll} = require('../database')
var axios = require('axios')
var apiUrl = "https://pokeapi.co/api/v2/pokemon/"
var app = express();


app.use(bodyParser.json())
// UNCOMMENT FOR REACT
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

app.post('/', function(req, res){
  // console.log(req.body.name)
  getPokemonName(req.body.name, (result) => {
    save(result)

  })
  // console.log('en//sd')
  res.end()
  // getPokemonName(req.body.name, function(data){
  //   console.log(name)
  //   save(data)
  //   .then(() => {
  //     res.status(201).send()
  //   })
  //
  // })
})


app.get('/data' ,function (req,res){
  // res.send('hey sending thing')
//   return pokemon.find({}).sort({'id':1})

  // list.List.find().sort().limit(10)
  //   .then((data)=>{
  //     res.send(data)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  selectAll()
     .then((data)=>{
       //console.log(data)
       res.send(data)
     })

})

// app.get('/', function(req,res) {
//   axios.get(apiUrl + charmander)
//   .then((data)=>{
//     res.statu(200).json(data.data)
//   })
//   .catch((err)=>{
//
//     console.log(err)
//   })
// })

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
