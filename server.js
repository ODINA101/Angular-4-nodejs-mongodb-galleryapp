const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app).listen(8000);
const io = require('socket.io')(server);
const mongo = require('mongodb');
const base = require('./database/base.js');
const upload = require('express-fileupload');
const multer = require('multer');
// set the directory for the uploads to the uploaded to
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo

app.use(upload());


app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/upload'));

var dburl = "mongodb://localhost:27017/data";

base.createBase();

app.get('/imgs',(req,res)=>{
  mongo.connect(dburl,(err,db)=>{
    db.collection('imgs').find().sort({}).toArray((err,result)=>{
      res.send(JSON.stringify(result));
    });
  });
});





app.post('/upload',(req,res)=>{
var file = req.files.photo;
file.mv("/dist/upload/" + file.name,(err)=>{
  console.log(err ? 'error in fileupload' : 'uploaded');
});
base.insertData('http://192.168.1.7:8000/upload/' + file.name);
});





io.sockets.on('connection',(socket)=>{


socket.on('newphoto',(data)=>{
  base.insertData(data);
});

});
