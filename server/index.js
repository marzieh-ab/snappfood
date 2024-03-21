const express = require("express");
const app = express();

app.get("data", (req, res) => {
  res.send(1);
});

app.listen(2000);
