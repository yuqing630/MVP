var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://eugene630:Yaoping01@ds151070.mlab.com:51070/mongod');

// const pokemon = require('pokemon')

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var listSchema = mongoose.Schema({
  id: {type: Number},
  name: String,
  img: String,
  like: Boolean
});

var List = mongoose.model('List', listSchema);

exports.save = (result) => {
  var newItem = new List({
    id : result.id,
    name : result.name,
    img : result.img,
    like: false
  })
  newItem.save(function(err){
    if (err) console.log(err)
  })
}
exports.saves = (result) => {
  var newItem = new List({
    id : result.id,
    name : result.name,
    img : result.img,
    like: true
  })
  newItem.save(function(err){
    if (err) console.log(err)
  })
}


exports.selectAll = () => {
  return List.aggregate({ $sample:{size: 6}})
  .exec()
};

exports.faves = () => {
  return List.find({like:true})
  .sort('id')
  .exec()
}
