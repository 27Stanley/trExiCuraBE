const User = require("../model/users.model");

//Fetch All users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Create user
exports.createUser = async (req, res, next) => {
  const user = new User({
    username: req.body.username,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get one user
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: "Cannot find user" });
  }
};

// Delete a User
exports.deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params.id;
    const user = await User.findOneAndDelete({ userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res.status(204).json({ message: `user deleted` });
    }
  } catch (err) {
    res.status(400).json({ message: `couldnt delete user, error: ${err}` });
  }
};
