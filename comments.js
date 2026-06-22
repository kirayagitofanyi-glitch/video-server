const express = require("express");

const router = express.Router();

router.post("/:videoId", (req, res) => {
  res.json({
    success: true,
    videoId: req.params.videoId,
    comment: req.body.comment
  });
});

module.exports = router;
