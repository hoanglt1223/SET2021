module.exports = {
  async up(db, client) {
    const UserCollection = db.collection("users");

    // INFO: set isEmployee = true when user isn't supervisor
    await UserCollection.updateMany(
      {
        isSupervisor: false,
      },
      { $set: { isEmployee: true } }
    );

    // INFO: set isEmployee = false when user is supervisor
    await UserCollection.updateMany(
      {
        isSupervisor: true,
      },
      { $set: { isEmployee: false } }
    );
  },

  async down(db, client) {
    const UserCollection = db.collection("users");

    await UserCollection.updateMany({}, { $unset: { isEmployee: "" } });
  },
};
