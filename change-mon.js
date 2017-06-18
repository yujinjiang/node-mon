 var mongodb = require('mongodb');
 var server = new mongodb.Server('localhost', 27017, { auto_reconnect: true });
 var db = new mongodb.Db('css', server, { safe: true });
 db.open(function(err, db) {
     if (err) {
         console.log(err);
     } else {
         //  gaibian  yige duanming  limian de shuzi 
         db.collection('cssjs', { safe: true }, function(err, collection) {
             collection.update({ title: 'get' }, { $set: { num: 213 } }, { safe: true }, function(err, result) {
                 console.log(result);
                 db.close();
             })
         });
     }
 });