const mongoose = require("mongoose");

const shoppingCartSchema = new mongoose.Schema({
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
    default: [],
  },
});

module.exports = mongoose.model("ShoppingCart", shoppingCartSchema);
