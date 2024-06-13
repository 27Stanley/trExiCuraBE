const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");
const artCollectionRoutes = require("./routes/artCollectionRoutes");

const app = express();
const dbConfig = require("./config/dbConfig");

app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/users", userRoutes);
app.use("/artCollections", artCollectionRoutes);

module.exports = app;
