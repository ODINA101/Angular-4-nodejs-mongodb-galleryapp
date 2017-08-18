var mongo = require('mongodb').MongoClient;
var dburl = "mongodb://localhost:27017/data";

var createBase = function() {

mongo.connect(dburl,(err,db) => {
mongodb = db;
 db.createCollection('imgs',(err,res)=>{

 });


});

}







var insertData = (data) => {

mongo.connect(dburl,(err,db)=>{

  db.collection('imgs').insertOne({link:data},(err,res)=>{
    console.log('inserted new img');
  });
});


}


module.exports = {createBase,insertData}
