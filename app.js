const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");
// const collectionRoutes = require("./routes/collectionRoutes");

const app = express();
const dbConfig = require("./config/dbConfig");

app.use(express.json());

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/users", userRoutes);
// app.use("/collections", collectionRoutes);

app.use(cors());

module.exports = app;
