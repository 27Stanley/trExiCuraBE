const express = require("express");
const router = express.Router();
const {
  getAllCollections,
  getCollectionById,
  addToCollection,
  deleteArtFromCollection,
} = require("../controller/artCollections.controller");

router.get("/", getAllCollections);
router.get("/:id", getCollectionById);

router.patch("/:collectionId", addToCollection);

router.delete("/:collectionId", deleteArtFromCollection);

module.exports = router;
