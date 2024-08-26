const School = require("../models/School");

// Create a new school
exports.createSchool = async (req, res) => {
  try {
    const school = new School(req.body);
    await school.save();
    res.status(201).send(school);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all schools
exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).send(schools);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a school by ID
exports.getSchoolById = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) return res.status(404).send("School not found");
    res.status(200).send(school);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a school
exports.updateSchool = async (req, res) => {
  try {
    const school = await School.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!school) return res.status(404).send("School not found");
    res.status(200).send(school);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a school
exports.deleteSchool = async (req, res) => {
  try {
    const school = await School.findByIdAndDelete(req.params.id);
    if (!school) return res.status(404).send("School not found");
    res.status(200).send({ message: "School deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
