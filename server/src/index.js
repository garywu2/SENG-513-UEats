const express = require("express");
const Users = require("./routes/Users");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/ueatsdb", () => {
  console.log("connected");
});

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/users", Users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
