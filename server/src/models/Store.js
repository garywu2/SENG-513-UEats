const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bankAccountNum: {
    type: String,
    required: true,
  },
  vendor: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "User",
  },
  foodItems: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "FoodItem" }],
    default: [],
  },
  availabilityTime: {
    type: {
      startTime: { type: String, required: true },
      endTime: { type: String, required: true },
    },
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  activeOrders: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Order" }],
    default: [],
  },
  processedOrders: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Order" }],
    default: [],
  },
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model("Store", storeSchema);
