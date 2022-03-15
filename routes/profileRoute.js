// import dependencies
const express = require("express");

const router = express.Router();

// import controllers
const {
  createProfile,
  getProfile,
  updateProfile,
} = require("../controllers/profileControllers");
const isAuth = require("../middleware/isAuth");

// CREATE
router.post("/", isAuth, createProfile);
// READ
router.get("/", getProfile);
// UPDATE
router.patch("/id", updateProfile);

module.exports = router;
