var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var list = require('../database');
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
      let result = {
        name: name,
        img: img,
        id: id
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
  // getPokemonName(req.body.name, function(data){
  //   console.log(name)
  //   save(data)
  //   .then(() => {
  //     res.status(201).send()
  //   })
  //
  // })
})

app.get('/',function (req,res){
  selectAll()
     .then((data)=>{
       res.send(data)
     })

})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
