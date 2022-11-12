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
    min: 0,
  },
  reviewType: {
    type: String,
    required: true,
  },
  parent: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("Review", reviewSchema);
