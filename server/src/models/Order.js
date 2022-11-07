const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  store: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Store",
  },
  client: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "User",
  },
  foodItems: {
    type: [
      {
        foodItem: { type: mongoose.SchemaTypes.ObjectId, ref: "FoodItem" },
        quantity: Number,
      },
    ],
    required: true,
  },
  pickupTime: {
    type: Date,
    required: true,
  },

  totalCost: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
