// import dependencies
const express = require("express");

const router = express.Router();

// import controllers
const {
  createWork,
  deleteWorkItem,
  getWork,
  getWorkItem,
  updateWorkItem,
} = require("../controllers/workControllers");
const isAuth = require("../middleware/isAuth");

// CREATE
router.post("/", isAuth, createWork);
// READ
router.get("/", getWork);
router.get("/:id", getWorkItem);
// UPDATE
router.patch("/:id", isAuth, updateWorkItem);
// DELETE
router.delete("/:id", isAuth, deleteWorkItem);

module.exports = router;
