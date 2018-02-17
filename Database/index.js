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
  // console.log(result)
  var newItem = new List({
    id : result.id,
    name : result.name,
    img : result.img,
    like: false
  })
// console.log(newItem)
  newItem.save(function(err){
    if (err) console.log(err)
  })
}



exports.selectAll = () => {
  return List.find({like:false})
  .sort('id')
  .limit(9)
  .exec()
};


// module.exports.selectAll = selectAll;
// module.exports = mongoose.model('pokemon', listSchema)s
