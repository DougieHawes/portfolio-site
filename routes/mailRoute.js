// import dependencies
const express = require("express");

const router = express.Router();

// import controllers
const { sendMail } = require("../controllers/mailControllers");

// CREATE
router.post("/", sendMail);

module.exports = router;
