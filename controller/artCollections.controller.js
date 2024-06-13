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
  console.log(req.params);
  try {
    const collection = await ArtCollection.findById(req.params.id);
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.json(collection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addToCollection = async (req, res) => {
  const { collectionId } = req.params;
  const { department, objectId } = req.body;

  if (department !== "MET" && department !== "HAR") {
    return res
      .status(404)
      .json({ message: "Invalid artwork, not belonging to MET or Harvard" });
  }

  try {
    const usersArtCollection = await ArtCollection.findById(collectionId);

    if (!usersArtCollection) {
      return res
        .status(404)
        .json({ message: "users art collection not found" });
    }

    const repeatingArtPiece = usersArtCollection.artworks.find((artwork) => {
      return artwork.objectId === objectId;
    });

    if (repeatingArtPiece !== undefined) {
      return res
        .status(400)
        .json({ message: "this artwork already exists in users collection" });
    }

    usersArtCollection.artworks.push({ department, objectId });
    await usersArtCollection.save();
    res.status(201).json(usersArtCollection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteArtFromCollection = async (req, res) => {
  const { collectionId } = req.params;
  const { objectId } = req.body;

  try {
    const usersArtCollection = await ArtCollection.findById(collectionId);

    if (!usersArtCollection) {
      return res
        .status(404)
        .json({ message: "users art collection not found" });
    }

    for (let i = 0; i < usersArtCollection.artworks.length; i++) {
      if (usersArtCollection.artworks[i].objectId === objectId) {
        console.log("here 3");
        usersArtCollection.artworks.splice(i, 1);
        break;
      }
    }

    await usersArtCollection.save();

    res.status(200).json({
      message: "Artwork removed successfully",
      collection: usersArtCollection,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
