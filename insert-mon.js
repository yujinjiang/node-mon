 var mongo = require('mongodb'),
     Server = mongo.Server,
     Db = mongo.Db;
 var server = new Server('localhost', 27017, { auto_reconnect: true });
 var db = new Db('css', server);
 //  相同的时候 插入这个数据库
 db.open(function(err, db) {
     if (!err) {
         console.log("We are connected");
         db.collection("css", function(err, collection) {
             collection.insert({ username: "盼盼", firstname: "李" },
                 function(err, docs) {
                     console.log(docs);
                     db.close();
                 });
         });

     }
 });