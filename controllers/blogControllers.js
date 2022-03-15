// import models
const Blog = require("../models/BlogModel");
const User = require("../models/UserModel");

// CREATE
exports.createBlogItem = async (req, res) => {
  const { image, subtitle, tags, text, title } = req.body;

  let newTags = tags.split(",");

  const blog = { image, subtitle, tags: newTags, text, title };

  const newBlog = new Blog(blog);

  try {
    await newBlog.save();

    res.status(200).json(newBlog);
  } catch (e) {
    res.status(404).json({ msg: e.message });
  }
};
// READ
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.find();

    res.json(blog.reverse());
  } catch (e) {
    console.error(e.message);
  }
};
exports.getBlogItem = async (req, res) => {
  const blogId = await req.params.id;

  const blogItem = await Blog.findById(blogId);

  res.json(blogItem);
};
// UPDATE
exports.updateBlogItem = (req, res) => {
  res.json({ msg: "update blog item" });
};
// DELETE
exports.deleteBlogItem = (req, res) => {
  res.json({ msg: "delete blog item" });
};
