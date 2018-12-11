const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  // kudos: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "kudos"
  //   }
  // ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;