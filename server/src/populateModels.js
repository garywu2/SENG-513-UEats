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
  console.log(`user ${name} saved`);
};

const getUserID = async (name) => {
  const users = await User.find({ name: name });
  const userID = users[0];
  return userID;
};

const addShoppingCartToUser = async (userID) => {
  const user = await User.findOne({ _id: userID });
  const carts = await ShoppingCart.find();
  user.shoppingCart = carts[0]._id;
  await user.save();
  console.log(`Shopping cart added to user`);
};

const addStoreToUser = async (userID, storeID) => {
  const user = await User.findOne({ _id: userID });
  user.store = storeID;
  await user.save();
  console.log(`Store added to user`);
};

const saveStore = async (
  name,
  description,
  bankAccountNum,
  vendorID,
  pickupLocation
) => {
  const store = new Store({
    name: name,
    description: description,
    bankAccountNum: bankAccountNum,
    vendor: vendorID,
    pickupLocation: pickupLocation,
    rating: 5,
  });
  try {
    await store.save();
  } catch (e) {
    console.log(e);
  }

  console.log(`Store ${name} saved`);
};

const getStoreID = async () => {
  const stores = await Store.find();
  return stores[0]._id;
};

const addFoodItemsToStore = async (storeID, foodItems) => {
  let storeFoodItems = [];
  foodItems.map((item) => storeFoodItems.push(item.foodItem));
  const store = await Store.findOne({ _id: storeID });
  store.foodItems = storeFoodItems;
  await store.save();
  console.log(`food items added to store`);
};

const addOrdersToStore = async (storeID, processedOrders, activeOrders) => {
  const store = await Store.findOne({ _id: storeID });
  store.activeOrders = activeOrders;
  store.processedOrders = processedOrders;
  await store.save();
  console.log(`Orders added to store`);
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
    console.log(`Food item ${name} saved`);
  } catch (e) {
    console.log(e);
  }
};

const getAllFoodItems = async () => {
  const foodItems = await FoodItem.find();
  const result = [];
  foodItems.map((item) => result.push({ foodItem: item._id, quantity: 1 }));
  return result;
};

const saveShoppingCart = async (clientID, foodItems) => {
  const shoppingCart = new ShoppingCart({
    client: clientID,
    foodItems: foodItems,
  });

  await shoppingCart.save();
  console.log(`Shopping cart saved`);
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

  console.log(`Order saved`);
};

const getActiveOrders = async () => {
  const result = await Order.find({ status: ORDER_STATUS.active });
  return result;
};

const getProcessedOrders = async () => {
  const result = await Order.find({ status: ORDER_STATUS.processed });
  return result;
};

const saveReview = async (
  clientID,
  storeID,
  comment,
  date,
  reviewType,
  rating = null
) => {
  const review = new Review({
    client: clientID,
    store: storeID,
    comment: comment,
    date: date,
    reviewType: reviewType,
  });
  if (!!reviewType) {
    review.rating = rating;
  }
  try {
    await review.save();
  } catch (e) {
    console.log(e);
  }
  console.log(`Review "${comment}" saved`);
};

const addReviewParent = async () => {
  const review = await Review.findOne({ reviewType: REVIEW_TYPE.reply });
  const parent = await Review.findOne({ reviewType: REVIEW_TYPE.comment });
  review.parent = parent;
  await review.save();
};

//populate Models

const insertData = async () => {
  await saveUser(
    "Smith",
    "smith@gmail.com",
    "1234567895",
    "smith",
    USER_TYPE.admin
  );

  await saveUser(
    "John",
    "JOHN@gmail.com",
    "1234567895",
    "JOHN",
    USER_TYPE.client
  );

  await saveUser(
    "Ueats",
    "ueats@testmail.com",
    "1234567895",
    "Ueats",
    USER_TYPE.client
  );

  await saveUser(
    "Steve",
    "steve@gmail.com",
    "1234567895",
    "steve",
    USER_TYPE.vendor
  );

  const vendorID = await getUserID("Steve");
  const clientID = await getUserID("John");

  await saveStore(
    "Burger Store",
    "we sell burgers!",
    "1234567895",
    vendorID,
    "U of C"
  );

  const storeID = await getStoreID();

  await saveFoodItem("BB Burger", 10, "Beyond Meat Burger", true, storeID);

  await saveFoodItem("M Burger", 12, "Meat Burger", true, storeID);

  await saveFoodItem("V Burger", 10, "Veggy Burger", true, storeID);

  const foodItems = await getAllFoodItems();

  await saveOrder(
    clientID,
    storeID,
    foodItems,
    new Date(),
    10,
    ORDER_STATUS.active
  );
  await saveOrder(
    clientID,
    storeID,
    foodItems,
    new Date(),
    10,
    ORDER_STATUS.processed
  );

  await saveShoppingCart(clientID, foodItems);

  const processedOrders = await getProcessedOrders();
  const activeOrders = await getActiveOrders();

  addShoppingCartToUser(clientID);
  addStoreToUser(vendorID, storeID);

  await addOrdersToStore(storeID, processedOrders, activeOrders);
  await addFoodItemsToStore(storeID, foodItems);

  await saveReview(
    clientID,
    storeID,
    "Good stuff!",
    new Date(),
    REVIEW_TYPE.comment,
    5
  );
  await saveReview(
    clientID,
    storeID,
    "Thanks John!",
    new Date(),
    REVIEW_TYPE.reply
  );
  addReviewParent();
};

insertData();
