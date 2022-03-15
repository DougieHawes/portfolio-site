// import dependencies
const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  category: String,
  codeLink: String,
  image: String,
  logos: [String],
  siteLink: String,
  subtitle: String,
  text: String,
  title: String,
});

module.exports = mongoose.model("Work", WorkSchema);
