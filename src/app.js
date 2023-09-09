const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const Student = require("./models/students");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello from the other sideo from ketan.");
})

app.post("/students", (req, res) => {
    const user = new Student(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
    
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})