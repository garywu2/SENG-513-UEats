const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { ORDER_STATUS } = require("../constants");
const Store = require("../models/Store");

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
router.get("/:_id", async (req, res) => {
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
router.get("/:_id/food-items", async (req, res) => {
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

//get order food items
router.get("/user/:_id/", async (req, res) => {
  const id = req.params._id;
  if (!id) {
    return res.status(400).json({ msg: "User id is missing" });
  }
  try {
    const userOrders = await Order.find({ client: id });
    res.json(userOrders);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//PUT Requests

//update order, id required, will update pickup time, food items and total cost
//use /order/process for updating status
router.put("/", async (req, res) => {
  const orderObject = {
    id: req.body._id,
    pickupTime: req.body.pickupTime,
    foodItems: req.body.foodItems,
    totalCost: req.body.totalCost,
  };
  if (!orderObject.id) {
    return res.status(400).json({ msg: "order id is missing" });
  }

  try {
    const order = await Order.findOne({ _id: orderObject.id });
    if (!!orderObject.pickupTime) {
      order.pickupTime = req.body.orderObject.pickupTime;
    }
    if (!!orderObject.foodItems) {
      if (orderObject.totalCost === undefined) {
        return res
          .status(400)
          .json({ msg: "Total cost required when updating food items" });
      }
      order.foodItems = orderObject.foodItems;
      order.totalCost = orderObject.totalCost;
    }
    await order.save();
    res.json(order);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

// process order, require store and order id
//Sets order status to processed, removes it from store processedOrders array
//and adds it to the processedOrders array
router.put("/process", async (req, res) => {
  const id = req.body._id;
  if (!id) {
    return res.status(400).json({ msg: "order id is missing" });
  }
  try {
    //update order status
    const order = await Order.findOne({ _id: id });
    order.status = ORDER_STATUS.processed;
    await order.save();

    //update store order arrays
    const store = await Store.findOne({ _id: order.store });
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
//will return 400 if pick up time out of store time range
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
  try {
    const store = await Store.findOne({ _id: order.store });
    if (
      store.availabilityTime &&
      store.availabilityTime.startTime &&
      store.availabilityTime.endTime
    ) {
      const orderDateObject = new Date(order.pickupTime);
      const orderHours = orderDateObject.getHours();
      if (
        parseInt(store.availabilityTime.endTime) < orderHours ||
        parseInt(store.availabilityTime.startTime) > orderHours
      ) {
        return res.status(400).json({ msg: "Order time out of store hours." });
      }
    }

    const dbOrder = new Order(order);
    dbOrder.status = ORDER_STATUS.active;
    await dbOrder.save();

    store.activeOrders.push(dbOrder._id);
    await store.save();

    res.json(order);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ msg: e.message });
  }
});

//delete an order, id required
//will be removed from the store
router.delete("/", async (req, res) => {
  const id = req.body._id;
  if (!id) {
    return res.status(400).json({ msg: "Review id is missing" });
  }
  try {
    const order = await Order.findOne({ _id: id });
    await Order.deleteOne({ _id: id });
    const store = await Store.findOne({ _id: order.store });

    if (order.status === ORDER_STATUS.active) {
      store.activeOrders = store.activeOrders.filter((order) => {
        return order !== id;
      });
    } else {
      store.processedOrders = store.processedOrders.filter((order) => {
        return order.toString() !== id;
      });
    }
    await store.save();

    res.json({ msg: "Order deleted successfully" });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
