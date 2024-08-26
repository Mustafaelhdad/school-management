const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subject_id: { type: String, required: true, unique: true },
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  name: { type: String, required: true },
  short_name: { type: String },
  can_be_consecutive: { type: Boolean, default: false },
  grade_levels: [{ type: String }],
  subject_together: { type: Boolean, default: false },
  sort_order: { type: Number },
  max_classes_per_week: { type: Number },
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
