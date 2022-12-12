const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  categories: {
    type: [String],
    default: [],
  },
  store: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Store",
  },
  image: { data: String },
});

module.exports = mongoose.model("FoodItem", foodItemSchema);
