const User = require("../model/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userRegister = async (req, res) => {
  const { email, username, password } = req.body;
  const find = await User.findOne({ email });
  if (find) {
    return res.json({ msg: "Your account is already existed" });
  }
  try {
    const registerUser = await User.create({
      email: email,
      username: username,
      password: password,
    });
    if (registerUser) {
      res.json({
        msg: "Thank you for registering membership and we will get back to you soon",
      });
    }
  } catch (err) {
    res.json({ msg: "Oops something went wrong" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    const userValidation = await bcrypt.compareSync(
      password,
      findUser.password
    );

    if (userValidation && findUser.isActivate == true) {
      const token = jwt.sign(
        {
          _id: findUser._id,
          username: findUser.username,
          email: findUser.email,
        },
        process.env.TOKEN_KEY
      );
      res.json({ msg: "Hi", token: token });
    } else {
      res.json({
        msg: "Email or password is incorrect/Account is not activated yet",
      });
    }
  }
};

module.exports = { userRegister, userLogin };
