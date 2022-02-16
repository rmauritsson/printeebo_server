const admin = require("../firebase");
const User = require("../models/user");

exports.authCheck = async (req, res, next) => {
  //console.log("Initial Auth Check ", req.headers);
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

    //console.log("Firebase User in Auth Check", firebaseUser);

    req.user = firebaseUser;
    req.user.role = req.headers.role;
    req.user.phoneNumber = req.headers.phoneNumber;
    next();
  } catch (err) {
    console.log("Error in Auth Check Middleware", err);
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};

exports.adminCheck = async (req, res, next) => {
  try {
    const { email } = req.user;

    const adminUser = await User.findOne({ email }).exec();

    if (adminUser.role !== "admin") {
      res.status(403).json({
        err: "Admin Resource. Access denied",
      });
    } else {
      next();
    }
  } catch (err) {
    console.log("Error in Admin Check Middleware", err);
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};

exports.storeOwnerCheck = async (req, res, next) => {
  try {
    const { email } = req.user;

    const creatorUser = await User.findOne({ email }).exec();

    if (creatorUser.role !== "creator") {
      res.status(403).json({
        err: "Creator Resource. Access denied",
      });
    } else {
      next();
    }
  } catch (err) {
    console.log("Error in Store Owner Check Middleware", err);
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};
