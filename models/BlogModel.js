// import dependencies
const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  subtitle: String,
  text: String,
  tags: { type: Array, default: [] },
  image: String,
  createdAt: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Blog", BlogSchema);
