const express = require("express");
const route = require("./routers/route");
const app = express();

app.use("/metadata", route);

const port = 3000;
app.listen(port, () => {
  console.log(`express connected on port ${port}...`);
});

