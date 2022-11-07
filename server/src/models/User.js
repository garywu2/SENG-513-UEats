const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, lowercase: true },
  phoneNum: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    lowercase: true,
  },
  type: {
    type: String,
    required: true,
  },
  store: mongoose.SchemaTypes.ObjectId,
  approvalStatus: {
    type: Boolean,
    default: false,
  },
  shoppingCart: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("User", userSchema);
