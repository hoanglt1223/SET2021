module.exports = {
  async up(db, client) {
    await db.collection('users').update({}, { $set: { isSupervisor: false } })
  },

  async down(db, client) {
    await db.collection('users').update({}, { $unset: { isSupervisor: '' } })
  }
}
