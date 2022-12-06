const express = require("express");
const router = express.Router();
const User = require("../models/User");
const ShoppingCart = require("../models/ShoppingCart");
const { USER_TYPE } = require("../constants");

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get all unapproved users
router.get("/unapproved", async (req, res) => {
  try {
    const users = await User.find({ approvalStatus: false });
    res.json(users);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get user by id
router.get("/:_id", async (req, res) => {
  if (!req.params._id) {
    return res.status(400).json({ msg: "User id is missing" });
  }
  try {
    const user = await User.findOne({ _id: req.params._id });
    res.json(user);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get user by email
router.get("/email/:email", async (req, res) => {
  if (!req.params.email) {
    return res.status(400).json({ msg: "User email is missing" });
  }
  try {
    const user = await User.findOne({ email: req.params.email });
    res.json(user);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//get user shopping cart
router.get("/:_id/shopping-cart", async (req, res) => {
  if (!req.params._id) {
    return res.status(400).json({ msg: "User id is missing" });
  }
  try {
    const user = await User.findOne({ _id: req.params._id }).populate(
      "shoppingCart"
    );
    res.json(user.shoppingCart);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//create a user, will automatically create shopping cart for the user
router.post("/", async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    phoneNum: req.body.phoneNum,
    username: req.body.username,
    type: req.body.type,
  };
  if (
    !user.name ||
    !user.email ||
    !user.phoneNum ||
    !user.username ||
    !user.type
  ) {
    return res.status(400).json({ msg: "User is missing a field" });
  }
  const dbUser = new User(user);
  try {
    await dbUser.save();

    if (user.type === USER_TYPE.client) {
      const shoppingCart = new ShoppingCart({ client: dbUser._id });
      await shoppingCart.save();

      dbUser.shoppingCart = shoppingCart._id;
      await dbUser.save();
    }

    res.json(dbUser);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//update a user, will update all attributes, id required
router.put("/", async (req, res) => {
  const newAttrs = req.body;
  const attrKeys = Object.keys(newAttrs);

  if (!newAttrs._id) {
    return res.status(400).json({ msg: "User id is missing" });
  }

  try {
    const user = await User.findOne({ _id: newAttrs._id });
    attrKeys.forEach((key) => {
      if (key !== "_id") {
        user[key] = newAttrs[key];
      }
    });
    await user.save();
    res.json(user);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

//delete a user, id required
router.delete("/", async (req, res) => {
  if (!req.body._id) {
    return res.status(400).json({ msg: "User id is missing" });
  }
  try {
    await User.deleteOne({ _id: req.body._id });
    res.json({ msg: "User deleted successfully" });
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
