module.exports = {
  async up(db, client) {
    await db.collection('users').update({}, { $unset: { isSupervisor: '' } })
  },

  async down(db, client) {
    await db.collection('users').update({ isEmployee: true }, { $set: { isSupervisor: false } })
    await db.collection('users').update({ isEmployee: false }, { $set: { isSupervisor: true } })
  }
}
