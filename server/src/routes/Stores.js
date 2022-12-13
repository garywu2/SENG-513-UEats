const express = require("express");
const router = express.Router();
const Store = require("../models/Store");
const Review = require("../models/Review");
const FoodItem = require("../models/FoodItem");
const Order = require("../models/Order");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
router.get("/:_id", async (req, res) => {
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

//get orders for store
router.get("/:_id/orders", async (req, res) => {
  if (!req.params._id) {
    return res.status(400).json({ msg: "Store id is missing" });
  }
  try {
    const store = await Store.findOne({ _id: req.params._id })
      .populate("activeOrders")
      .populate("processedOrders");
    res.json(store.activeOrders.concat(store.processedOrders));
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get food items for store
router.get("/:_id/food-items", async (req, res) => {
  if (!req.params._id) {
    return res.status(400).json({ msg: "Store id is missing" });
  }
  try {
    const store = await Store.findOne({ _id: req.params._id }).populate(
      "foodItems"
    );
    res.json(store.foodItems);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get store reviews
router.get("/:_id/reviews", async (req, res) => {
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

//availability times should be strings containg hour in 24-hr format
//for example "availabilityTime": {"startTime": "08", "endTime": "17"}
//POST requests
router.post("/", upload.single("image"), async (req, res) => {
  const store = {
    name: req.body.name,
    description: req.body.description,
    vendor: req.body.vendor,
    bankAccountNum: req.body.bankAccountNum,
    availabilityTime: req.body.availabilityTime,
    pickupLocation: req.body.pickupLocation,
    image: {
      data: req.file.buffer.toString("base64"),
    },
  };

  if (
    !store.vendor ||
    !store.name ||
    !store.description ||
    !store.bankAccountNum ||
    !store.availabilityTime ||
    !store.pickupLocation ||
    !store.image
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

//update store, id required, will not update food items, orders, rating
//use order process endpoints
//rating will automatically updated when reviews are added or changed
//food items will be automatically added or removed when a food item is added or removed
router.put("/", upload.single("image"), async (req, res) => {
  const newAttrs = req.body;
  const attrKeys = Object.keys(newAttrs);

  const notToBeUpdated = [
    "_id",
    "activeOrders",
    "processedOrders",
    "rating",
    "foodItems",
  ];

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

    if (!!req.file) {
      store.image = {
        data: req.file.buffer.toString("base64"),
      };
    }
    await store.save();
    res.json(store);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//delete a store, id required
//related food items, orders and reviews will be deleted
//ask user to confirm
router.delete("/", async (req, res) => {
  const id = req.body._id;
  if (!id) {
    return res.status(400).json({ msg: "Store id is missing" });
  }
  try {
    await FoodItem.deleteMany({ store: id });
    await Order.deleteMany({ store: id });
    await Review.deleteMany({ store: id });
    await Store.deleteOne({ _id: id });

    res.json({ msg: "Store deleted successfully" });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
