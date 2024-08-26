const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  education_level: { type: String, required: true },
  type: { type: String, required: true },
  max_classes_per_day: { type: Number, required: true },
  max_days_per_week: { type: Number, required: true },
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;
