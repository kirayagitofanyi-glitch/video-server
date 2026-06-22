const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.q || "";

  res.json({
    success: true,
    query,
    users: [],
    videos: []
  });
});

module.exports = router;
