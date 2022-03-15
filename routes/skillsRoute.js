// import dependencies
const express = require("express");

const router = express.Router();

// import controllers
const {
  createSkill,
  deleteSkill,
  getSkills,
  updateSkill,
} = require("../controllers/skillControllers");
const isAuth = require("../middleware/isAuth");

// CREATE
router.post("/", createSkill);
// READ
router.get("/", getSkills);
// UPDATE
router.patch("/:id", isAuth, updateSkill);
// DELETE
router.delete("/:id", isAuth, deleteSkill);

module.exports = router;
