const express = require("express");

const router = express.Router();

router.post("/:userId", (req, res) => {
  res.json({
    success: true,
    following: req.params.userId
  });
});

module.exports = router;
