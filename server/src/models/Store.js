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
      startTime: { type: Date, required: true },
      endTime: { type: Date, required: true },
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
  image: {
    data: String,
  },
});

module.exports = mongoose.model("Store", storeSchema);
