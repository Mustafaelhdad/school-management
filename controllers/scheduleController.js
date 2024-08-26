const Schedule = require("../models/Schedule");

// Create a new schedule
exports.createSchedule = async (req, res) => {
  try {
    const schedule = new Schedule(req.body);
    await schedule.save();
    res.status(201).send(schedule);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all schedules
exports.getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).send(schedules);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a schedule by ID
exports.getScheduleById = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) return res.status(404).send("Schedule not found");
    res.status(200).send(schedule);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a schedule
exports.updateSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!schedule) return res.status(404).send("Schedule not found");
    res.status(200).send(schedule);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a schedule
exports.deleteSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);
    if (!schedule) return res.status(404).send("Schedule not found");
    res.status(200).send({ message: "Schedule deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
