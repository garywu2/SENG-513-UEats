const express = require("express");
const router = express.Router();
// const User = require("../models/User");
// const ShoppingCart = require("../models/ShoppingCart");
const Store = require("../models/Store");
const Order = require("../models/Order");
const FoodItem = require("../models/FoodItem");
const { ORDER_STATUS } = require("../constants");
const Review = require("../models/Review");

//get all stores
router.get("/", async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get store by id
router.get("/store/:_id", async (req, res) => {
  if (!req.params._id) {
    return res.status(400).json({ msg: "Store id is missing" });
  }
  try {
    const store = await Store.findOne({ _id: req.params._id });
    res.json(store);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get active orders for store
router.get("/store/orders/active/:_id", async (req, res) => {
  if (!req.params._id) {
    return res.status(400).json({ msg: "Store id is missing" });
  }
  try {
    const store = await Store.findOne({ _id: req.params._id }).populate(
      "activeOrders"
    );
    res.json(store.activeOrders);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get processed orders for store
router.get("/store/orders/processed/:_id", async (req, res) => {
  if (!req.params._id) {
    return res.status(400).json({ msg: "Store id is missing" });
  }
  try {
    const store = await Store.findOne({ _id: req.params._id }).populate(
      "processedOrders"
    );
    res.json(store.processedOrders);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get food items for store
router.get("/store/food-items/:_id", async (req, res) => {
  if (!req.params._id) {
    return res.status(400).json({ msg: "Store id is missing" });
  }
  try {
    const store = await Store.findOne({ _id: req.params._id }).populate(
      "foodItems.foodItem"
    );
    res.json(store.foodItems);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get store reviews
router.get("/store/reviews/:_id", async (req, res) => {
  const id = req.params._id;
  if (!id) {
    return res.status(400).json({ msg: "Store id is missing" });
  }
  try {
    const reviews = await Review.find({ store: id });
    res.json(reviews);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//POST requests
router.post("/", async (req, res) => {
  const store = {
    name: req.body.name,
    description: req.body.description,
    vendor: req.body.vendor,
    bankAccountNum: req.body.bankAccountNum,
    availabilityTime: req.body.availabilityTime,
    pickupLocation: req.body.pickupLocation,
  };

  if (
    !store.vendor ||
    !store.name ||
    !store.description ||
    !store.bankAccountNum ||
    !store.availabilityTime ||
    !store.pickupLocation
  ) {
    return res.status(400).json({ msg: "Store is missing a mandatory field" });
  }
  try {
    const dbStore = new Store(store);
    await dbStore.save();
    res.json(dbStore);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//PUT requests

//update store, id required, will not update food items, orders
router.put("/", async (req, res) => {
  const newAttrs = req.body;
  const attrKeys = Object.keys(newAttrs);

  const notToBeUpdated = ["_id", "activeOrders", "processedOrders"];

  if (!newAttrs._id) {
    return res.status(400).json({ msg: "store id is missing" });
  }

  try {
    const store = await Store.findOne({ _id: newAttrs._id });
    attrKeys.forEach((key) => {
      if (!notToBeUpdated.includes(key)) {
        store[key] = newAttrs[key];
      }
    });
    await store.save();
    res.json(store);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
