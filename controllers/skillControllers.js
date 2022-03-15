const Skill = require("../models/SkillModel");

// CREATE
exports.createSkill = async (req, res) => {
  const skill = req.body;

  const newSkill = new Skill(skill);

  try {
    await newSkill.save();

    res.status(200).json(newSkill);
  } catch (e) {
    res.status(404).json({ msg: e.message });
  }
};
// READ
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
// UPDATE
exports.updateSkill = (req, res) => {
  res.json({ msg: "update skill" });
};
// DELETE
exports.deleteSkill = (req, res) => {
  res.json({ msg: "delete skill" });
};
