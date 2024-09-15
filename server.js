const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
const port = 5000;
const uri = "mongodb://localhost:27017"; //MongoDB connection string

// Middleware
app.use(express.json());
app.use(cors()); // CORS support for frontend
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/v3/app", eventRoutes);

// Connect to MongoDB
MongoClient.connect(uri)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("event_management");
    app.locals.db = db;
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    );
  })
  .catch((error) => console.error(error));
