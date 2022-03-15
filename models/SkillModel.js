// import dependencies
const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: String,
  bulletpoints: String,
  logo: String,
});

module.exports = mongoose.model("Skill", SkillSchema);
