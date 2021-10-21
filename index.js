const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 0, name: "shofol", address: "saidpure" },
  { id: 1, name: "Ashikul", address: "Dhaka" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("hiting the post", req.body);
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
