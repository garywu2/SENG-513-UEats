const express = require("express");
const router = express.Router();
const ShoppingCart = require("../models/ShoppingCart");

//get all shopping carts
router.get("/", async (req, res) => {
  try {
    const shoppingCart = await ShoppingCart.find();
    res.json(shoppingCart);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get cart by id
router.get("/shopping-cart/:_id", async (req, res) => {
  const id = req.params._id;
  if (!id) {
    return res.status(400).json({ msg: "Cart id is missing" });
  }
  try {
    const cart = await ShoppingCart.findOne({ _id: id });
    res.json(cart);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get cart by client id
router.get("/shopping-cart/client/:_id", async (req, res) => {
  const id = req.params._id;
  if (!id) {
    return res.status(400).json({ msg: "Client id is missing" });
  }
  try {
    const cart = await ShoppingCart.findOne({ client: id });
    res.json(cart);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get  food items
router.get("/shopping-cart/food-items/:_id", async (req, res) => {
  const id = req.params._id;
  if (!id) {
    return res.status(400).json({ msg: "Cart id is missing" });
  }
  try {
    const cart = await ShoppingCart.findOne({ _id: id }).populate(
      "foodItems.foodItem"
    );
    res.json(cart.foodItems);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//PUT Requests

//add food item to cart, id required,
//food item id and quantity required
router.put("/shopping-cart/add/food-item", async (req, res) => {
  const cartID = req.body._id;
  const foodItemID = req.body.foodItem;
  const quantity = req.body.quantity;

  if (!cartID || !foodItemID || !quantity) {
    return res
      .status(400)
      .json({ msg: "One of the required attributes is missing" });
  }

  try {
    const cart = await ShoppingCart.findOne({ _id: cartID });
    cart.foodItems.push({ foodItem: foodItemID, quantity: quantity });
    await cart.save();
    res.json(cart);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//remove food item from cart, id required,
//food item id required
router.put("/shopping-cart/remove/food-item", async (req, res) => {
  const cartID = req.body._id;
  const foodItemID = req.body.foodItem;

  if (!cartID || !foodItemID) {
    return res
      .status(400)
      .json({ msg: "One of the required attributes is missing" });
  }

  try {
    const cart = await ShoppingCart.findOne({ _id: cartID });
    cart.foodItems = cart.foodItems.filter((item) => {
      return item.foodItem.toString() !== foodItemID;
    });
    await cart.save();
    res.json(cart);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
