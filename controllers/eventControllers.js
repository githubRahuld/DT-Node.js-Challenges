const { ObjectId } = require("mongodb");

// Get event by id
const getEventById = async (req, res) => {
  const db = req.app.locals.db;
  const eventId = req.query.id;
  console.log(eventId);

  try {
    const event = await db
      .collection("events")
      .findOne({ _id: new ObjectId(eventId) });
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch event" });
  }
};

// Get latest events with pagination
const getLatestEvents = async (req, res) => {
  const db = req.app.locals.db;
  const { limit, page } = req.query;
  const skip = (parseInt(page) - 1) * parseInt(limit);
  try {
    const events = await db
      .collection("events")
      .find()
      .sort({ schedule: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .toArray();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

// Create a new event
const createEvent = async (req, res) => {
  const db = req.app.locals.db;
  const newEvent = {
    ...req.body,
    files: req.file ? req.file.path : null,
  };
  try {
    const result = await db.collection("events").insertOne(newEvent);
    res.status(201).json({ _id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: "Failed to create event" });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  const db = req.app.locals.db;
  const eventId = req.params.id;
  console.log(eventId);

  try {
    const result = await db
      .collection("events")
      .updateOne({ _id: new ObjectId(eventId) }, { $set: { ...req.body } });
    res.status(200).json({ updated: result.modifiedCount });
  } catch (err) {
    res.status(500).json({ error: "Failed to update event" });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  const db = req.app.locals.db;
  const eventId = req.params.id;
  try {
    const result = await db
      .collection("events")
      .deleteOne({ _id: new ObjectId(eventId) });
    res.status(200).json({ deleted: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete event" });
  }
};

module.exports = {
  getEventById,
  getLatestEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
