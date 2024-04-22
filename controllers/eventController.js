const Event = require("../model/events");

const getEvents = (req, res) => {
  res.status(200).json({ message: "Events" });
};

const createEvents = async (req, res) => {
  const createEvent = await Event.create({
    event_title: req.body.event_title,
    event_body: req.body.event_body,
  });
  if (createEvent) {
    res.json({ message: "Event is created" });
  } else {
    res.json({ message: "Error" });
  }
};

const updateEvents = async (req, res) => {
  let { id } = req.params;
  try {
    const updateEvent = await Event.findByIdAndUpdate(id, req.body);
    res.json({ message: "Event has been updated successfully" });
  } catch (err) {
    res.json({ message: "Oops something went wrong" });
  }
};

const deleteEvent = async (req, res) => {
  let { id } = req.params;
  try {
    await Event.findByIdAndDelete(id);
    res.json({ message: "Event has been deleted" });
  } catch (err) {
    res.json({ message: "Oops something went wrong" });
  }
};

module.exports = {
  getEvents,
  createEvents,
  updateEvents,
  deleteEvent,
};
