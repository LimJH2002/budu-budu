const express = require("express");
const next = require("next");
const fs = require("fs");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/api/images", (req, res) => {
    const imagesDirectory = path.join(__dirname, "public/timeline");
    fs.readdir(imagesDirectory, (err, files) => {
      if (err) {
        return res.status(500).send("Error reading images");
      }
      const imagePaths = files.map((file) => `/timeline/${file}`);
      res.json(imagePaths);
    });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3001;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
