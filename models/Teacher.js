const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  teacher_id: { type: String, required: true, unique: true },
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  name: { type: String, required: true },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  max_classes_per_week: { type: Number, required: true },
  assigned_classes: { type: Number, default: 0 },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
