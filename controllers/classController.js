const Class = require("../models/Class");

// Create a new class
exports.createClass = async (req, res) => {
  try {
    const classData = new Class(req.body);
    await classData.save();
    res.status(201).send(classData);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).send(classes);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a class by ID
exports.getClassById = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.id);
    if (!classData) return res.status(404).send("Class not found");
    res.status(200).send(classData);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a class
exports.updateClass = async (req, res) => {
  try {
    const classData = await Class.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!classData) return res.status(404).send("Class not found");
    res.status(200).send(classData);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a class
exports.deleteClass = async (req, res) => {
  try {
    const classData = await Class.findByIdAndDelete(req.params.id);
    if (!classData) return res.status(404).send("Class not found");
    res.status(200).send({ message: "Class deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
