const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  class_id: { type: String, required: true, unique: true },
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  grade_level: { type: String, required: true },
  section: { type: String, required: true },
  students_count: { type: Number, required: true },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
