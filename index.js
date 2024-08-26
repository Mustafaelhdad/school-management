const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/school-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

const schoolRoutes = require("./routes/schoolRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const classRoutes = require("./routes/classRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");

app.use("/schools", schoolRoutes);
app.use("/teachers", teacherRoutes);
app.use("/subjects", subjectRoutes);
app.use("/classes", classRoutes);
app.use("/schedules", scheduleRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
