const Work = require("../models/WorkModel");

// CREATE
exports.createWork = async (req, res) => {
  const work = req.body;

  const newWork = new Work(work);

  console.log(newWork);

  try {
    await newWork.save();

    res.status(200).json(newWork);
  } catch (e) {
    res.status(404).json({ msg: e.message });
  }
};
// READ
exports.getWork = async (req, res) => {
  try {
    const work = await Work.find();
    res.json(work);
  } catch (e) {
    console.error(e.message);
  }
};
exports.getWorkItem = async (req, res) => {
  const workId = await req.params.id;

  const workItem = await Work.findById(workId);

  res.json(workItem);
};
// UPDATE
exports.updateWorkItem = (req, res) => {
  res.json({ msg: "update work item" });
};
// DELETE
exports.deleteWorkItem = (req, res) => {
  res.json({ msg: "delete work item" });
};
