const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,

  createUser,

  deleteUser,
} = require("../controller/users.controller");

router.get("/", getAllUsers);
router.get("/:id", getUser);

router.post("/", createUser);

router.delete("/:id", deleteUser);

module.exports = router;
