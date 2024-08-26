const Teacher = require("../models/Teacher");

// Create a new teacher
exports.createTeacher = async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).send(teacher);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).send(teachers);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a teacher by ID
exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).send("Teacher not found");
    res.status(200).send(teacher);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a teacher
exports.updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!teacher) return res.status(404).send("Teacher not found");
    res.status(200).send(teacher);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a teacher
exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) return res.status(404).send("Teacher not found");
    res.status(200).send({ message: "Teacher deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
