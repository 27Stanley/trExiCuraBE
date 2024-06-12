const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "enter username",
    unique: true,
  },
  curatedCollection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ArtCollection",
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
