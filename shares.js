const express = require("express");

const router = express.Router();

router.post("/:videoId", (req, res) => {
  res.json({
    success: true,
    videoId: req.params.videoId
  });
});

module.exports = router;
