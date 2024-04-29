const express = require("express");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const passport = require("passport");
const mongoDB = require("./config/db");

const User = require("./model/users");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
mongoDB();
app.use(
  session({
    genid: (req) => {
      return uuidv4();
    },
    secret: "tell me your secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/success", (req, res) => {
  res.json({ msg: "Success" });
});
app.get("/fail", (req, res) => {
  res.json({ msg: "fail" });
});

app.use("/users", require("./routes/auth/auths"));
app.use("/api/events", require("./routes/api/events"));

mongoose.connection.once("open", () => {
  console.log("Database is connected");
  app.listen(4000, () => {
    console.log("Server is running on 4000");
  });
});
