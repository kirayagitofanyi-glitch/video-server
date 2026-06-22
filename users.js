const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.json({
    userId: req.params.id,
    username: "user",
    followersCount: 0,
    followingCount: 0
  });
});

module.exports = router;
