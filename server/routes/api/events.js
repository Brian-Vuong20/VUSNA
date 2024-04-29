const express = require("express");
const router = express.Router();
const {
  getEvents,
  createEvents,
  updateEvents,
  deleteEvent,
} = require("../../controllers/eventController");

router.get("/", getEvents);
router.post("/", createEvents);
router.put("/:id", updateEvents);
router.delete("/:id", deleteEvent);

module.exports = router;
