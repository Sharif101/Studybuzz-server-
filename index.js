const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const courseData = require("./Data/courses.json");

app.get("/courses", (req, res) => {
  res.send(courseData);
});

app.get("/courses/:id", (req, res) => {
  // console.log(req.params.id);
  let id = req.params.id;
  let selectedCourse = courseData.find((c) => c.id === id);
  res.send(selectedCourse);
});

app.listen(Port, () => {
  console.log("server is runing", Port);
});
