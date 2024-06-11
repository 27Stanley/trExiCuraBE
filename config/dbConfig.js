// MongoDB connection
const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("error", (err) => {
  console.log("error connecting to database:", err);
});

connection.on("connected", () => {
  console.log("connected to database");
});

module.exports = connection;
