const { CollectionSchema } = require("../model/users.model.js");

// Add art to collection
exports.addArt = async (req, res, next) => {
  try {
    const { title, artist, year, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const newArt = new Art({ title, artist, year, user: user._id });
    await newArt.save();
    res.status(201).json(newArt);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get art collection
exports.getArt = async (req, res) => {
  const userId = req.params.id;
  try {
    const colection = await collection.findById(userId);
    if (!collection) {
      return res.status(404).json({ error: "Collection not found" });
    }
    res.json(collection);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the collection" });
  }
};
