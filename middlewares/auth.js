const admin = require("../firebase");

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
