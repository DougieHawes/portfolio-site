// import dependencies
const express = require("express");

const router = express.Router();

// import controllers
const {
  createBlogItem,
  deleteBlogItem,
  getBlog,
  getBlogItem,
  updateBlogItem,
} = require("../controllers/blogControllers");
const isAuth = require("../middleware/isAuth");

// CREATE
router.post("/", isAuth, createBlogItem);
// READ
router.get("/", getBlog);
router.get("/:id", getBlogItem);
// UPDATE
router.patch("/:id", isAuth, updateBlogItem);
// DELETE
router.delete("/:id", isAuth, deleteBlogItem);

module.exports = router;
