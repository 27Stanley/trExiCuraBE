const express = require("express");
const router = express.Router();
const {
  getAllCollections,
  getCollectionById,
  createCollection,
  addToCollection,
  deleteCollection,
} = require("../controller/artCollections.controller");

router.get("/", getAllCollections);
router.get("/:id", getCollectionById);

// router.post("/", createCollection);

// router.put("/:id", addToCollection);

// router.delete("/:id", deleteCollection);

module.exports = router;
