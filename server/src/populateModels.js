const mongoose = require("mongoose");
const fs = require("fs");
const ShoppingCart = require("./models/ShoppingCart");
const FoodItem = require("./models/FoodItem");
const Order = require("./models/Order");
const User = require("./models/User");
const Store = require("./models/Store");
const Review = require("./models/Review");

const { USER_TYPE, ORDER_STATUS, REVIEW_TYPE } = require("../src/constants");
const path = require("path");

mongoose.connect("mongodb://localhost/ueatsdb", () => {
  console.log("connected");
});

const saveUser = async (
  name,
  email,
  phoneNum,
  username,
  type,
  approvalStatus = false
) => {
  const user = new User({
    name: name,
    email: email,
    phoneNum: phoneNum,
    username: username,
    type: type,
    approvalStatus: approvalStatus,
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
  pickupLocation,
  image
) => {
  const store = new Store({
    name: name,
    description: description,
    bankAccountNum: bankAccountNum,
    vendor: vendorID,
    pickupLocation: pickupLocation,
    rating: 5,
    image: image,
  });
  store.availabilityTime = { startTime: "08", endTime: "17" };

  try {
    await store.save();
  } catch (e) {
    console.log(e);
  }

  console.log(`Store ${name} saved`);
};

const getStoreID = async (index) => {
  const stores = await Store.find();
  return stores[index]._id;
};

const addFoodItemsToStore = async (storeID, foodItems) => {
  let storeFoodItems = [];
  foodItems.map((item) => storeFoodItems.push(item.foodItem));
  const store = await Store.findOne({ _id: storeID });
  store.foodItems = storeFoodItems;
  await store.save();
  console.log(`food items added to store`);
};

const addOrdersToStore = async (storeID) => {
  const processedOrders = await getProcessedOrders(storeID);
  const activeOrders = await getActiveOrders(storeID);
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
  storeID,
  image
) => {
  const foodItem = new FoodItem({
    name: name,
    price: price,
    description: description,
    availability: availability,
    store: storeID,
    image: image,
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

const getActiveOrders = async (storeId) => {
  const result = await Order.find({
    store: storeId,
    status: ORDER_STATUS.active,
  });
  return result;
};

const getProcessedOrders = async (storeId) => {
  const result = await Order.find({
    store: storeId,
    status: ORDER_STATUS.processed,
  });
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

const addReviewParent = async (clientID) => {
  const review = await Review.findOne({
    client: clientID,
    reviewType: "reply",
  });
  const parent = await Review.findOne({
    client: clientID,
    reviewType: "comment",
  });
  review.parent = parent._id;
  await review.save();
};

//populate Models

const insertData = async () => {
  await saveUser(
    "Smith",
    "smith@testmail.com",
    "1234567895",
    "smith",
    USER_TYPE.admin
  );

  await saveUser(
    "John",
    "john@testmail.com",
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
    "steve@testmail.com",
    "1234567895",
    "steve1",
    USER_TYPE.vendor,
    true
  );

  await saveUser(
    "Steve2",
    "steve2@testmail.com",
    "1234567896",
    "steve2",
    USER_TYPE.vendor
  );

  await saveUser(
    "Steve3",
    "steve3@testmail.com",
    "1234567897",
    "steve3",
    USER_TYPE.vendor
  );
  await saveUser(
    "NoStoreSteve",
    "NoStoreSteve@testmail.com",
    "1234567897",
    "NoStoreSteve",
    USER_TYPE.vendor
  );

  const vendorID = await getUserID("Steve");
  const vendorID1 = await getUserID("Steve2");
  const vendorID2 = await getUserID("Steve3");
  const clientID = await getUserID("John");
  const clientIDuEats = await getUserID("Ueats");

  await saveStore(
    "Carl's Jr",
    "We sell burgers!",
    "1234567895",
    vendorID,
    "U of C",
    {
      data: fs.readFileSync(
        path.resolve(__dirname, "./assets/images/stores/CarlsJr.png"),
        { encoding: "base64" }
      ),
    }
  );
  await saveStore(
    "Bake Chef",
    "We sell subs!",
    "1234567896",
    vendorID1,
    "U of C",
    {
      data: fs.readFileSync(
        path.resolve(__dirname, "./assets/images/stores/bakechef.jpg"),
        { encoding: "base64" }
      ),
    }
  );
  await saveStore(
    "CPU Express",
    "We sell the finest Canadian pizza",
    "1234567897",
    vendorID2,
    "U of C",
    {
      data: fs.readFileSync(
        path.resolve(__dirname, "./assets/images/stores/CPU.png"),
        { encoding: "base64" }
      ),
    }
  );

  const storeID = await getStoreID(0);
  const storeID1 = await getStoreID(1);
  const storeID2 = await getStoreID(2);

  await saveFoodItem("Sub", 10, "Beef Satay", true, storeID, {
    data: fs.readFileSync(
      path.resolve(__dirname, "./assets/images/food-items/bake_chef_sub.jpeg"),
      { encoding: "base64" }
    ),
  });

  await saveFoodItem("M Burger", 12, "Meat Burger", true, storeID, {
    data: fs.readFileSync(
      path.resolve(__dirname, "./assets/images/food-items/burger.jpeg"),
      { encoding: "base64" }
    ),
  });

  await saveFoodItem("V Burger", 10, "Veggy Burger", true, storeID, {
    data: fs.readFileSync(
      path.resolve(__dirname, "./assets/images/food-items/veggie_burger.jpg"),
      { encoding: "base64" }
    ),
  });

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

  await saveShoppingCart(clientIDuEats, foodItems);
  await saveShoppingCart(clientID, foodItems);

  addShoppingCartToUser(clientID);
  addShoppingCartToUser(clientIDuEats);
  addStoreToUser(vendorID, storeID);
  addStoreToUser(vendorID1, storeID1);
  addStoreToUser(vendorID2, storeID2);

  await addOrdersToStore(storeID);
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

  await saveReview(
    clientIDuEats,
    storeID,
    "Good stuff!",
    new Date(),
    REVIEW_TYPE.comment,
    5
  );
  await saveReview(
    clientIDuEats,
    storeID,
    "Thanks John!",
    new Date(),
    REVIEW_TYPE.reply
  );
  addReviewParent(clientID);
  addReviewParent(clientIDuEats);
};

insertData();
