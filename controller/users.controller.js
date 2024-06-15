const User = require("../model/users.model");
const ArtCollection = require("../model/artCollections.model");

//Fetch All users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Create user and user collection simulaneously
exports.createUser = async (req, res, next) => {
  const session = await User.startSession();
  session.startTransaction();

  try {
    // Create new user
    const user = new User({
      username: req.body.username,
    });

    const newUser = await user.save();

    // Create collection for user
    const newCollection = new ArtCollection({
      user: newUser._id,
      artworks: [],
    });
    await newCollection.save({ session });

    //assign userId to collection
    newUser.curatedCollection = newCollection._id;
    await newUser.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ user: newUser, collection: newCollection });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get one user by Id
exports.getUserById = async (req, res, next) => {
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

// Get one user by username
exports.getUserByUsername = async (req, res, next) => {
  const { username } = req.params;
  console.log(username);

  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      console.log(user);
      return res.json(user);
    }
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
