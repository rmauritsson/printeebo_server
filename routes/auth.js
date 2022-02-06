const express = require("express");
const { userAuth } = require("../controllers/auth");

const router = express.Router();

// Create or Update User
router.get("/user-auth", userAuth);

module.exports = router;
