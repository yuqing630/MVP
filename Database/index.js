var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const pokemon = require('pokemon')

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var listSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  img: String,
  like: Boolean



});

var List = mongoose.model('List', listSchema);

exports.save = (result) => {
  // console.log(result)
  var newItem = new List({
    id : result.id,
    name : result.name,
    img : result.img
  })
// console.log(newItem)
}


exports.selectAll = () => {
  return List.find({})
  .sort('id')
  .exec()
};


// module.exports.selectAll = selectAll;
