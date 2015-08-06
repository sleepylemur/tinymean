var express = require('express');
var app = express();
app.use(express.static('public'));

var Mongo = require('mongodb');
var MongoClient = Mongo.MongoClient;
var ObjectId = Mongo.ObjectID;
var dburl = 'mongodb://localhost:27017/testdb';

app.get('/test', function(req,res) {
  MongoClient.connect(dburl, function(err,db) {
    if (err) return res.send('dberr: ',err);
    db.collection('users').find().toArray(function(err,users) {
      if (err) return res.send(err);
      res.send(users);
    });
  });
});

app.listen(3000);
