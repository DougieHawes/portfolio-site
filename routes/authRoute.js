// import dependencies
const express = require("express");

const router = express.Router();

// import controllers
const {
  createUser,
  getUser,
  loggedIn,
  loginUser,
  logoutUser,
} = require("../controllers/authControllers");
const isAuth = require("../middleware/isAuth");

// CREATE
router.post("/", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
// READ
router.get("/", getUser);
router.get("/isauth", isAuth, loggedIn);

module.exports = router;
