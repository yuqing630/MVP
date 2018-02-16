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
  url: String,
  like: Boolean



});

var List = mongoose.model('List', listSchema);

exports.save = (lists) => {
  return list.create(lists)
}


exports.selectAll = () => {
  return List.find({like : true})
  .sort('id')
  .exec()
};

// module.exports.selectAll = selectAll;
