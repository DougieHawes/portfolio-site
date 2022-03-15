// import models
const Profile = require("../models/ProfileModel");

// CREATE
exports.createProfile = async (req, res) => {
  const profile = req.body;

  const newProfile = new Profile(profile);

  try {
    await newProfile.save();

    res.status(200).json(newProfile);
  } catch (e) {
    res.status(404).json({ msg: e.message });
  }
};
// READ
exports.getProfile = async (req, res) => {
  try {
    const profiles = await Profile.find();

    res.json(profiles);
  } catch (e) {
    console.error(e.message);
  }
};
// UPDATE
exports.updateProfile = (req, res) => {
  res.json({ msg: "update profile" });
};
