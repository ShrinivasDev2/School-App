const User = require("../models/user");

const signup = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    console.log(e);
    res.status(404).send(e);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password,
      req.body.role
    );
    console.log("Logged in as : " + req.body.role);
    res.status(200).json({ Message: "Logged In Successfull" });
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = { signup, login };
