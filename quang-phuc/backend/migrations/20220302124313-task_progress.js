module.exports = {
  async up(db, client) {
    await db.collection('tasks').update({}, { $set: { progress: 0 } })
  },

  async down(db, client) {
    await db.collection('tasks').update({}, { $unset: { progress: '' } })
  }
}
