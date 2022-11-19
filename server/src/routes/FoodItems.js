const express = require("express");
const router = express.Router();
const FoodItem = require("../models/FoodItem");

//for parsing multipart form
const multer = require("multer");
const Order = require("../models/Order");
const { ORDER_STATUS } = require("../constants");
const Store = require("../models/Store");
const ShoppingCart = require("../models/ShoppingCart");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//get all food items
router.get("/", async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get food item by id
router.get("/:_id", async (req, res) => {
  const id = req.params._id;
  if (!id) {
    return res.status(400).json({ msg: "Food item id is missing" });
  }
  try {
    const foodItem = await FoodItem.findOne({ _id: id });
    res.json(foodItem);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get food items by a category
router.get("/category/:category", async (req, res) => {
  const category = req.params.category;
  if (!category) {
    return res.status(400).json({ msg: "Categoryis missing" });
  }
  try {
    const foodItems = await FoodItem.find({ categories: { $in: category } });
    res.json(foodItems);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//PUT request
router.put("/", upload.single("image"), async (req, res) => {
  if (!req.body._id) {
    return res.status(400).json({ msg: "Food Item ID missing" });
  }
  const foodItem = await FoodItem.findOne({ _id: req.body._id });

  if (!!req.body.name) {
    foodItem.name = req.body.name;
  }
  if (!!req.body.description) {
    foodItem.description = req.body.description;
  }
  if (!!req.body.availability) {
    foodItem.availability = req.body.availability;
  }
  if (req.body.price !== undefined) {
    foodItem.price = req.body.price;
  }
  if (!!req.body.categories) {
    foodItem.categories = req.body.categories;
  }
  if (!!req.file) {
    foodItem.image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };
  }
  await foodItem.save();
  res.json(foodItem);
});

//POST request

//will add food item to store
router.post("/", upload.single("image"), async (req, res) => {
  const foodItem = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    availability: req.body.availability,
    store: req.body.store,
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
  };

  if (
    !foodItem.name ||
    !foodItem.description ||
    !foodItem.price ||
    !foodItem.availability ||
    !foodItem.store ||
    !foodItem.image
  )
    return res
      .status(400)
      .json({ msg: "One of the required attributes is missing" });
  if (!!req.body.categories) foodItem.categories = req.body.categories;

  try {
    const foodItemDB = new FoodItem(foodItem);
    await foodItemDB.save();
    const store = await Store.findById(foodItemDB.store);
    store.foodItems.push(foodItemDB._id);
    await store.save();
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }

  res.json({ msg: "Food item saved" });
});

//delete a food item, id required
//will not delete if food item part of an active order
//will delete food item from store and shopping carts
router.delete("/", async (req, res) => {
  const id = req.body._id;
  if (!id) {
    return res.status(400).json({ msg: "Food itemid is missing" });
  }
  try {
    const foodItem = await FoodItem.findOne({ _id: id });
    const activeOrdersWithFoodItem = await Order.find({
      status: ORDER_STATUS.active,
      foodItems: {
        $elemMatch: {
          foodItem: id,
        },
      },
    });
    if (activeOrdersWithFoodItem.length > 0)
      return res.status(400).json({
        msg: "Food item is part of an active order. Can not delete it.",
      });

    //delete food item
    await FoodItem.deleteOne({ _id: id });

    //delete from store food items
    const store = await Store.findById(foodItem.store);
    store.foodItems = store.foodItems.filter((item) => item.toString() !== id);
    await store.save();

    const carts = await ShoppingCart.find({
      foodItems: {
        $elemMatch: {
          foodItem: id,
        },
      },
    });

    //delete from shopping carts
    for (let i = 0; i < carts.length; i++) {
      const cart = await ShoppingCart.findOne(carts[i]._id);
      cart.foodItems = store.foodItems.filter(
        (item) => item._id.toString() !== id
      );
      await cart.save();
    }

    res.json({ msg: "Food item deleted successfully" });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
