const express = require("express");
const { userAuth, currentUser } = require("../controllers/auth");
const {
  authCheck,
  adminCheck,
  storeOwnerCheck,
} = require("../middlewares/auth");

const router = express.Router();

//Import middleware

// Controller
router.post("/user-auth", authCheck, userAuth);
router.post("/current-user", authCheck, currentUser);
router.post("/current-creator", authCheck, storeOwnerCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
