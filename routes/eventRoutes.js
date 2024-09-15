const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getEventById,
  getLatestEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventControllers.js");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Routes
router.get("/events", getEventById);
router.get("/events/get", getLatestEvents);
router.post("/events", upload.single("image"), createEvent);
router.patch("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

module.exports = router;
