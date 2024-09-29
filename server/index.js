const express = require("express");
const app = express();
const cors = require("cors");
const qList = require("./seeds"); 

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/questions/:id", (req, res) => {
  const {id} = req.params;
  res.send(qList[id]);
})

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8000, () => {
  console.log("listening");
});