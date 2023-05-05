const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const hostname = "localhost";
const port = 3000;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
const {
  createPlayerController,
} = require("./controllers/createPlayerController");
app.post("/players", createPlayerController);

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Project</h1></body></html>");
});

mongoose.connect("mongodb://localhost/NBA_project").then(() => {
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
});
