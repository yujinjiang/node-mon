/*
var mongo = require("mongodb");
var host = "localhost";
var port = 27017;
var server = mongo.Server(host, port, { auto_reconnect: true });
var db = new mongo.Db("css", server, { safe: true });
db.open(function(err, db) {
    db.collection("css", function(err, collection) {
        if (err) throw err;
        else {
            collection.find({}).toArray(function(err, docs) {
                if (err) throw err;
                else {
                    console.log(docs);
                    db.close();
                }
            });
        }
    });
});
db.on('close', function() {
    console.log('get');
});
*/
var mongo = require("mongodb");
var host = "localhost";
var port = 27017;
var server = mongo.Server(host, port, { auto_reconnect: true });
var db = new mongo.Db('css', server, { safe: true });
db.open(function(err, db) {
    //  collection   shi yi ge biaodan  leisiyi shuju ku he biaodan de  qubie 
    db.collection("cssjs", function(err, collection) {
        if (err) throw err;
        else {
            //    zhe ge shi qu yang tianjian  
            collection.find({}).toArray(function(err, docs) {
                if (err) throw err;
                else {
                    console.log(docs);
                    db.close();
                }
            });
        }
    });
});