const express = require("express");
const mongoose = require("mongoose");
const Users = require("./routes/Users");
const Stores = require("./routes/Stores");
const Orders = require("./routes/Orders");
const ShoppingCarts = require("./routes/ShoppingCarts");
const Reviews = require("./routes/Reviews");
const Fooditems = require("./routes/FoodItems");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost/ueatsdb", () => {
  console.log("connected");
});

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/users", Users);

app.use("/stores", Stores);

app.use("/orders", Orders);

app.use("/shopping-carts", ShoppingCarts);

app.use("/reviews", Reviews);

app.use("/food-items", Fooditems);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
