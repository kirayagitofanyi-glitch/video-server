const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Video Server Running"
  });
});

router.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "OK"
  });
});

module.exports = router;
