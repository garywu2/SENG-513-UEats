const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const FoodItem = require("../models/FoodItem");
const { ORDER_STATUS } = require("../constants");
const Store = require("../models/Store");
const User = require("../models/User");

//get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get order by id
router.get("/order/:_id", async (req, res) => {
  const id = req.params._id;
  if (!id) {
    return res.status(400).json({ msg: "Order id is missing" });
  }
  try {
    const order = await Order.findOne({ _id: id });
    res.json(order);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get order food items
router.get("/order/food-items/:_id", async (req, res) => {
  const id = req.params._id;
  if (!id) {
    return res.status(400).json({ msg: "Order id is missing" });
  }
  try {
    const order = await Order.findOne({ _id: id }).populate(
      "foodItems.foodItem"
    );
    res.json(order.foodItems);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//PUT Requests

//update order, id required, will not update food items
router.put("/", async (req, res) => {
  const newAttrs = req.body;
  const attrKeys = Object.keys(newAttrs);

  const notToBeUpdated = ["_id", "foodItems"];

  if (!newAttrs._id) {
    return res.status(400).json({ msg: "order id is missing" });
  }

  try {
    const order = await Order.findOne({ _id: newAttrs._id });
    attrKeys.forEach((key) => {
      if (!notToBeUpdated.includes(key)) {
        order[key] = newAttrs[key];
      }
    });
    await order.save();
    res.json(order);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//add food item to order, id required,
//food item id and quantity required
router.put("/add/food-item", async (req, res) => {
  const orderID = req.body._id;
  const foodItemID = req.body.foodItem;
  const quantity = req.body.quantity;

  if (!orderID || !foodItemID || !quantity) {
    return res
      .status(400)
      .json({ msg: "One of the required attributes is missing" });
  }

  try {
    const order = await Order.findOne({ _id: orderID });
    order.foodItems.push({ foodItem: foodItemID, quantity: quantity });
    await order.save();
    res.json(order);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//remove food item from order, id required,
//food item id required
router.put("/remove/food-item", async (req, res) => {
  const orderID = req.body._id;
  const foodItemID = req.body.foodItem;

  if (!orderID || !foodItemID) {
    return res
      .status(400)
      .json({ msg: "One of the required attributes is missing" });
  }

  try {
    const order = await Order.findOne({ _id: orderID });
    order.foodItems = order.foodItems.filter((item) => {
      console.log(item.foodItem, foodItemID);
      return item.foodItem.toString() !== foodItemID;
    });
    await order.save();
    res.json(order);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

// process order, require store and order id
router.put("/order/process", async (req, res) => {
  const id = req.body._id;
  const storeID = req.body.store;
  if (!id || !storeID) {
    return res.status(400).json({ msg: "Store id or order id is missing" });
  }
  try {
    //update order status
    const order = await Order.findOne({ _id: id });
    order.status = ORDER_STATUS.processed;
    await order.save();

    //update store order arrays
    const store = await Store.findOne({ _id: storeID });
    store.activeOrders = store.activeOrders.filter(
      (orderID) => orderID.toString() !== id
    );
    store.processedOrders.push(id);
    await store.save();

    res.json(order);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//POST Request

//creates order, set order status to active, add it to the store activeOrders array
router.post("/", async (req, res) => {
  const order = {
    client: req.body.client,
    store: req.body.store,
    foodItems: req.body.foodItems,
    pickupTime: req.body.pickupTime,
    totalCost: req.body.totalCost,
  };
  if (
    !order.client ||
    !order.store ||
    !order.foodItems ||
    !order.pickupTime ||
    !order.totalCost
  ) {
    return res.status(400).json({ msg: "Order is missing a field" });
  }
  const dbOrder = new Order(order);
  try {
    dbOrder.status = ORDER_STATUS.active;
    await dbOrder.save();

    const store = await Store.findOne({ _id: order.store });
    console.log(store.activeOrders);
    store.activeOrders.push(dbOrder._id);
    await store.save();

    res.json(order);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
