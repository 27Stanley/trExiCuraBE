const express = require("express");
const router = express.Router();
const {
  getCollections,
  addToCollection,
} = require("../controller/collections.controller");

router.get("/collections/:userId", getCollections);
router.post("/collections/:userId", addToCollection);
router.delete("/collections/:userId", deleteFromCollection);

module.exports = router;
