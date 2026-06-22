const express = require("express");

const router = express.Router();

const videos = [];

router.get("/", (req, res) => {
  res.json(videos);
});

router.post("/create", (req, res) => {
  const video = {
    id: Date.now().toString(),
    caption: req.body.caption || "",
    videoUrl: req.body.videoUrl || "",
    thumbnail: req.body.thumbnail || "",
    likesCount: 0,
    commentsCount: 0,
    sharesCount: 0,
    viewsCount: 0,
    createdAt: Date.now()
  };

  videos.push(video);

  res.json(video);
});

module.exports = router;
