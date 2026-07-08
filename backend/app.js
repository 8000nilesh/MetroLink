require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = 2500;

const authRoutes = require("./routes/authentication");
const metroRoutes = require("./routes/metro");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/authentication", authRoutes);
app.use("/metro", metroRoutes);

mongoose
  .connect("mongodb://localhost:27017/hack")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
