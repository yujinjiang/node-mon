 var mongodb = require('mongodb');
 var server = new mongodb.Server('localhost', 27017, { auto_reconnect: true });
 var db = new mongodb.Db('css', server, { safe: true });
 db.open(function(err, db) {
     if (err) {
         console.log(err);
     } else {
         db.collection('cssjs', { safe: true }, function(err, collection) {
             collection.remove({ title: 123 }, { get: 'css' }, { safe: true },
                 function(err, result) {
                     console.log(result);
                     db.close();
                 })
         })
     }
 });
 db.on('close', function() {
     console.log('out');
 })