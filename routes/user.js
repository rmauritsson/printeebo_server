const express = require("express");

const router = express.Router();

// Create or Update User
router.get("/user", (req, res) => {
  res.json({
    data: "Printeebo User API endpoint",
  });
});

module.exports = router;
