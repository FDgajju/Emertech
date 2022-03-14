const express = require("express");
const app = express();
const {getUser, getUsersWithIp} = require("./controller/userController")

app.get("/user/:id", getUser)
app.get("/users", getUsersWithIp)

const port = 4000;
app.listen(port, () => {
  console.log(`express connected on port ${port}...`);
});

