const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const userId = req.query.userId;

  res.json({
    success: true,
    userId,
    videos: []
  });
});

module.exports = router;
