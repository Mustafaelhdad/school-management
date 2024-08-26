const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  education_level: {
    type: Number,
    required: true,
    enum: [1, 2, 3], // 1 for ابتدائي, 2 for اعدادي, 3 for ثانوي
    validate: {
      validator: function (v) {
        return [1, 2, 3].includes(v);
      },
      message: (props) =>
        `${props.value} is not a valid education level. Choose between 1 (ابتدائي), 2 (اعدادي), or 3 (ثانوي).`,
    },
  },
  type: {
    type: String,
    required: true,
    enum: ["boys", "girls"], // "boys" for مدارس البنين, "girls" for مدارس البنات
    validate: {
      validator: function (v) {
        return ["boys", "girls"].includes(v);
      },
      message: (props) =>
        `${props.value} is not a valid type. Choose between 'boys' and 'girls'.`,
    },
  },
  max_days_per_week: { type: Number, required: true, min: 1, max: 7 },
  max_classes_per_day: {
    type: [Number], // Array of numbers representing max classes per day
    required: true,
    validate: {
      validator: function (v) {
        // Check if the length of the array matches max_days_per_week
        return v.length === this.max_days_per_week;
      },
      message: (props) =>
        `The number of elements in max_classes_per_day (${props.value.length}) must match max_days_per_week (${props.instance.max_days_per_week}).`,
    },
  },
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;
