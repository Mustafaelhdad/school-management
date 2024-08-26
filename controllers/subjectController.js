const Subject = require("../models/Subject");

// Create a new subject
exports.createSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).send(subject);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all subjects
exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).send(subjects);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a subject by ID
exports.getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) return res.status(404).send("Subject not found");
    res.status(200).send(subject);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a subject
exports.updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!subject) return res.status(404).send("Subject not found");
    res.status(200).send(subject);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a subject
exports.deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) return res.status(404).send("Subject not found");
    res.status(200).send({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
