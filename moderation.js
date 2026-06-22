const express = require("express");

const router = express.Router();

router.post("/report", async (req, res) => {
  const { videoId, reason } = req.body;

  res.json({
    success: true,
    videoId,
    reason
  });
});

module.exports = router;
