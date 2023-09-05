const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");

app.get("/", (req, res) => {
    res.send("hello from the other sideo from ketan.");
})

app.post("/students", (req, res) => {
    res.send("hello from the other side.");
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})