const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var KudosSchema = new Schema({
  title: {
    type: String
  }, 
  body: {
    type: String
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;