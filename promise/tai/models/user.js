let mongoose = require('mongoose');

  let Schema = mongoose.Schema;
  let UserModel = new Schema({
    id: {
      type: 'number',
      required: true
  },
  username: {
      type: 'string',
      required: true,
      unique: true
  },
  password: {
      type: 'string',
      required: true
  }
  });
  
module.exports = mongoose.model("user", UserModel)