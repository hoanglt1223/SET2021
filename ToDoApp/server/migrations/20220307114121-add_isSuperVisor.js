module.exports = {
  up(db) {
    return db.collection('users').updateMany({}, { $set: { isSuperVisor: false }});
  },

  down(db) {
    return db.collection('users').updateMany({}, { $unset: { isSuperVisor: null }});
  }
};