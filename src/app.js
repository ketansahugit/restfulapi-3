const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const Student = require("./models/students");

app.use(express.json());

// read the data of registered Students
app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

// get the individual student data using id
app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.send(e);
  }
});

// create new students
/* app.post("/students", (req, res) => {
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
}); */

// create new students - asynchronously
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
