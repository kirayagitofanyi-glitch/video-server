const express = require("express");

const auth = require("./auth");
const users = require("./users");
const videos = require("./videos");
const likes = require("./likes");
const comments = require("./comments");
const shares = require("./shares");
const follows = require("./follows");
const notifications = require("./notifications");
const search = require("./search");
const trending = require("./trending");
const recommendation = require("./recommendation");
const moderation = require("./moderation");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TikTok Video Server Running"
  });
});

router.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "OK"
  });
});

router.use("/auth", auth);
router.use("/users", users);
router.use("/videos", videos);
router.use("/likes", likes);
router.use("/comments", comments);
router.use("/shares", shares);
router.use("/follows", follows);
router.use("/notifications", notifications);
router.use("/search", search);
router.use("/trending", trending);
router.use("/recommendation", recommendation);
router.use("/moderation", moderation);

module.exports = router;
