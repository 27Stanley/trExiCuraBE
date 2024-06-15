const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  getUserByUsername,

  createUser,

  deleteUser,
} = require("../controller/users.controller");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/:username", getUserByUsername);

router.post("/", createUser);

router.delete("/:id", deleteUser);

module.exports = router;
