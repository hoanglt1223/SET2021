const { MongoClient } = require('mongodb')
const client = new MongoClient("mongodb+srv://thanhtailt1223:tailt1007@cluster0.mv93c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const   dbName = "myFirstDatabase"
const db = client.db(dbName)

module.exports = {
  up(db, client) {
    return db.collection('users').updateMany({isSuperMan: {$exists: false}}, {$set: {isSuperMan: true}});

  },

  down(db, client) {
    return db.collection('users').updateMany({isSuperMan: {$exists: true}}, {$unset: {isSuperMan: true}});

  }
};
