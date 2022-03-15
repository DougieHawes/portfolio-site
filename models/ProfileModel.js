// import dependencies
const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  bio: String,
  location: String,
  phone: String,
  linkedin: String,
  github: String,
  youtube: String,
  codepen: String,
  twitter: String,
  facebook: String,
});

module.exports = mongoose.model("Profile", ProfileSchema);
