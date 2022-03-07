module.exports = {
  async up(db, client) {
    const UserCollection = db.collection("users");

    await UserCollection.updateMany({}, { $set: { isSupervisor: false } });
  },

  async down(db, client) {
    const UserCollection = db.collection("users");

    await UserCollection.updateMany({}, { $unset: { isSupervisor: "" } });
  },
};
