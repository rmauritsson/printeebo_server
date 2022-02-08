const User = require("../models/user");

exports.userAuth = async (req, res) => {
  console.log("User Auth Check", req.user);
  const { name, picture, email, role, phoneNumber } = req.user;

  const user = await User.findOneAndUpdate(
    { email },
    { name, picture, role, phoneNumber },
    { new: true }
  );

  if (user) {
    console.log("USER UPDATED", user);
    res.json(user);
  } else {
    const newUser = await new User({
      name,
      picture,
      email,
      role,
      phoneNumber,
    }).save();
    console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};

exports.currentUser = async (req, res) => {
  (await User.findOne({ email: req.user.email })).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
