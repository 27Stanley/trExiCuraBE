const express = require("express");
const router = express.Router();

const {
  getUser,
  createUser,
  getAllUsers,
  deleteUser,
} = require("../controller/users.controller");

router.get("/", getAllUsers);
router.get("/:id", getUser);

router.post("/", createUser);

router.delete("/:id", deleteUser);

module.exports = router;
