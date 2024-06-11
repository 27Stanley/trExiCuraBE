const mongoose = require("mongoose");

exports.CollectionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  objectIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Object" }],
});
