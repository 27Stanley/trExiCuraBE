const mongoose = require("mongoose");

//new collection for each new user

const ArtCollectionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  artworks: [
    {
      department: String,
      objectId: Number,
    },
  ],
});

const ArtCollection = mongoose.model("ArtCollection", ArtCollectionSchema);

module.exports = ArtCollection;

//test push
