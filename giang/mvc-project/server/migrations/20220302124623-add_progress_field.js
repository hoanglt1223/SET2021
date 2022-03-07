module.exports = {
  async up(db, client) {
    const TaskCollection = db.collection("tasks");

    await TaskCollection.updateMany({}, { $set: { progress: 0 } });
  },

  async down(db, client) {
    const TaskCollection = db.collection("tasks");

    await TaskCollection.updateMany({}, { $unset: { progress: "" } });
  },
};
