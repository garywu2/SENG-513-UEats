const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  client: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "User",
  },
  store: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Store",
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
  },
  reviewType: {
    type: String,
    required: true,
  },
  reply: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("Review", reviewSchema);
