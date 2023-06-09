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
const { getPlayersController } = require("./controllers/getPlayersController");
const { registerController } = require("./controllers/registerController");
const { loginController } = require("./controllers/loginController");

app.post("/players", createPlayerController);
app.get("/players", getPlayersController);
app.post("/register", registerController);
app.post("/login", loginController);

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
