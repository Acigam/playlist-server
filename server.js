const express = require("express");
const playlistController = require("./controllers/playlistController");

const app = express();

app.use(express.json());

app.use("/api/songs", playlistController);

app.listen(3000, () => {
  console.log("Server is running on port 3000, http://localhost:3000");
});
