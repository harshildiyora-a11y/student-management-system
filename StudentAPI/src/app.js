const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route — confirms the API is alive and lists available endpoints
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Student API is running",
        endpoints: {
            getAll: "GET /students",
            getOne: "GET /students/:id",
            create: "POST /students",
            update: "PUT /students/:id",
            delete: "DELETE /students/:id",
        },
    });
});

// Routes
app.use("/students", studentRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;