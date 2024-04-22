const express = require("express");
const router = express.Router();
const { userVerification } = require("../../middlewares/authentication");

router.post("/", userVerification);

module.exports = router;
