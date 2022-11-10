const express = require("express");
const mongoose = require("mongoose");
const Users = require("./routes/Users");
const Stores = require("./routes/Stores");
const Orders = require("./routes/Orders");

const app = express();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
