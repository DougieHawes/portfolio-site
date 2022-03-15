// import dependencies
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// import models
const User = require("../models/UserModel");

// CREATE
exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hashed_password = await bcrypt.hash(password, salt);

  const newUser = new User({
    email,
    password: hashed_password,
  });

  await newUser.save();
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "5 days" },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
};
exports.logoutUser = (req, res) => {
  res.json({ msg: "logout" });
};
// READ
exports.getUser = async (req, res) => {
  res.json({ msg: "get user" });
};
exports.loggedIn = async (req, res) => {
  res.json({ msg: "logged in" });
};
