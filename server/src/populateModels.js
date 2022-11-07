const mongoose = require("mongoose");
const ShoppingCart = require("./models/ShoppingCart");
const FoodItem = require("./models/FoodItem");
const Order = require("./models/Order");
const User = require("./models/User");
const Store = require("./models/Store");
const Review = require("./models/Review");

const { USER_TYPE, ORDER_STATUS, REVIEW_TYPE } = require("../src/constants");

mongoose.connect("mongodb://localhost/ueatsdb", () => {
  console.log("connected");
});

const saveUser = async (name, email, phoneNum, username, type) => {
  const user = new User({
    name: name,
    email: email,
    phoneNum: phoneNum,
    username: username,
    type: type,
  });

  await user.save();
};

const getUserID = async (name) => {
  const users = await User.find({ name: name });
  return users[0]._id;
};

const saveStore = async (
  name,
  description,
  bankAccountNum,
  sellerID,
  pickupLocation
) => {
  const store = new Store({
    name: name,
    description: description,
    bankAccountNum: bankAccountNum,
    seller: sellerID,
    pickupLocation: pickupLocation,
  });
  try {
    await store.save();
  } catch (e) {
    console.log(e);
  }
};

const getStoreID = async (name) => {
  const stores = await Store.find({ name: name });
  return stores[0]._id;
};

const saveFoodItem = async (
  name,
  price,
  description,
  availability,
  storeID
) => {
  const foodItem = new FoodItem({
    name: name,
    price: price,
    description: description,
    availability: availability,
    store: storeID,
  });
  try {
    await foodItem.save();
  } catch (e) {
    console.log(e);
  }
};

const saveShoppingCart = async (clientID) => {
  const shoppingCart = new ShoppingCart({
    client: clientID,
  });

  await shoppingCart.save();
};

const saveOrder = async (
  clientID,
  storeID,
  foodItems,
  pickupTime,
  totalCost,
  status
) => {
  const order = new Order({
    client: clientID,
    store: storeID,
    foodItems: foodItems,
    pickupTime: pickupTime,
    totalCost: totalCost,
    status: status,
  });
  try {
    await order.save();
  } catch (e) {
    console.log(e);
  }
};

const saveReview = async (
  clientID,
  storeID,
  comment,
  date,
  rating,
  reviewType
) => {
  const review = new Review({
    client: clientID,
    store: storeID,
    comment: comment,
    date: date,
    rating: rating,
    reviewType: reviewType,
  });
  try {
    await review.save();
  } catch (e) {
    console.log(e);
  }
  console.log("saved");
};

//functions

// saveUser("Smith","smith@gmail.com", "1234567895", "smith", USER_TYPE.admin)

// saveUser("John","JOHN@gmail.com", "1234567895", "JOHN", USER_TYPE.client)

// saveUser("Steve","steve@gmail.com", "1234567895", "steve", USER_TYPE.seller)

// getUserID("John");

// saveStore("Burger Store", "we sell burgers!","1234567895", "6368874c80ff569389febe98", "U of C")

// saveFoodItem("Burger", 10,"Beyond meat burger",true,"63688e501ae15a223e13228c" )

// saveOrder("6368874c80ff569389febe98","63688e501ae15a223e13228c", [{ foodItem: "636895ba3a960393809e28f1", quantity: 2 }], new Date(), 10, ORDER_STATUS.active )

// saveReview("6368874c80ff569389febe98","63688e501ae15a223e13228c","Good stuff!", new Date(), 5, REVIEW_TYPE.comment )
