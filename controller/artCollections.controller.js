const ArtCollection = require("../model/artCollections.model");
const User = require("../model/users.model");

exports.getAllCollections = async (req, res, next) => {
  try {
    const artCollections = await ArtCollection.find();
    res.json(artCollections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCollectionById = async (req, res) => {
  try {
    const collection = await ArtCollection.findById(req.params.id).populate(
      "user"
    );
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.json(collection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCollection = async (req, res) => {
  const { user, artworks } = req.body;

  try {
    const collection = new ArtCollection({
      artworks,
      user: id,
    });
    const newCollection = await collection.save();

    await User.findByIdAndUpdate(id, { collection: newCollection._id });

    res.status(201).json(newCollection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
