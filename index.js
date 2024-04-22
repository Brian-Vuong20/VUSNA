const express = require("express");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoDB = require("./config/db");
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

app.use("/api/events", require("./routes/api/events"));
app.use("/users", require("./routes/auth/auths"));
app.use("/", require("./routes/auth/authentication"));
mongoose.connection.once("open", () => {
  console.log("Database is connected");
  app.listen(3000, () => {
    console.log("Server is running on 3000");
  });
});
