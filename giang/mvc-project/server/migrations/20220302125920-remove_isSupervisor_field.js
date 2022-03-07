module.exports = {
  async up(db, client) {
    const UserCollection = db.collection("users");

    await UserCollection.updateMany({}, { $unset: { isSupervisor: "" } });
  },

  async down(db, client) {
    const UserCollection = db.collection("users");

    // INFO: set isSupervisor = true when user isn't employee
    await UserCollection.updateMany(
      {
        isEmployee: false,
      },
      { $set: { isSupervisor: true } }
    );

    // INFO: set isSupervisor = false when user is employee
    await UserCollection.updateMany(
      {
        isEmployee: true,
      },
      { $set: { isSupervisor: false } }
    );
  },
};
