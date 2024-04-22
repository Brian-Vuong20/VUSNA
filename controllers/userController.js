const Users = require("../model/users");
const { createSecretToken } = require("../utils/jwt");

const bcrypt = require("bcryptjs");
const userSignup = async (req, res, next) => {
  const { username, password } = req.body;
  const createUser = await Users.create({
    username: username,
    password: password,
  });
  const token = createSecretToken(createUser._id);
  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: false,
  });
  res.json({ message: "Users is created" });
  next();
};

const userLogin = async (req, res, next) => {
  const { username } = req.body;
  const find = await Users.findOne({ username });
  if (find) {
    const auth = await bcrypt.compare(req.body.password, find.password);
    if (!auth) {
      return res.json({ message: "Incorrect username or password" });
    }
    const token = createSecretToken(find._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
  }
  next();
};

module.exports = { userLogin, userSignup };
