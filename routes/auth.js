const express = require("express");
const { userAuth, currentUser } = require("../controllers/auth");
const { authCheck } = require("../middlewares/auth");

const router = express.Router();

//Import middleware

// Controller
router.post("/user-auth", authCheck, userAuth);
router.post("/current-user", authCheck, currentUser);

module.exports = router;
