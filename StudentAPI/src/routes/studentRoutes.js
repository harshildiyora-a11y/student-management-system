const express = require("express");
const StudentController = require("../controllers/studentController");

const router = express.Router();

// Get all students
router.get("/", StudentController.getAllStudents);

// Get student by ID
router.get("/:id", StudentController.getStudentById);

// Create a new student
router.post("/", StudentController.createStudent);

// Update student
router.put("/:id", StudentController.updateStudent);

// Delete student
router.delete("/:id", StudentController.deleteStudent);

module.exports = router;
