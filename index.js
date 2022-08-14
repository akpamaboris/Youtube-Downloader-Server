const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

require("dotenv").config();
app.use(cors());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/download", (req, res) => {
  console.log("in download");
  const URL = req.query.URL;
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');

  ytdl(URL, {
    format: "mp4",
  }).pipe(res);

  // res.json({ url: URL });
});
app.listen(4000, function () {
  console.log("Server works at port http://localhost:4000");
});
