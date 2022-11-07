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
  store: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Store",
  },
  approvalStatus: {
    type: Boolean,
    default: false,
  },
  shoppingCart: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "ShoppingCart",
  },
});

module.exports = mongoose.model("User", userSchema);
