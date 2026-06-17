const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/students", studentRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;