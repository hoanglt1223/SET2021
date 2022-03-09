module.exports = {
  async up(db, client) {
    await db.collection('users').update({ isSupervisor: true }, { $set: { isEmployee: false } })
    await db.collection('users').update({ isSupervisor: false }, { $set: { isEmployee: true } })
  },

  async down(db, client) {
    await db.collection('users').update({}, { $unset: { isEmployee: '' } })
  }
}
