const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const courseData = require("./Data/courses.json");

app.get("/courses", (req, res) => {
  res.send("runing");
});

app.listen(Port, () => {
  console.log("server is runing", Port);
});
