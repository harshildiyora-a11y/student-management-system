const StudentModel = require("../models/studentModel");

class StudentController {
    // Get all students
    static getAllStudents(req, res) {
        StudentModel.getAllStudents((err, rows) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(rows);
        });
    }

    // Get student by ID
    static getStudentById(req, res) {
        const { id } = req.params;

        StudentModel.getStudentById(id, (err, row) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err.message });
            }
            if (!row) {
                return res.status(404).json({ message: "Student not found" });
            }
            res.status(200).json(row);
        });
    }

    // Create a new student
    static createStudent(req, res) {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: "Name and Email are required" });
        }

        StudentModel.createStudent(name, email, (err, studentId) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({
                message: "Student created successfully",
                id: studentId,
                name,
                email,
            });
        });
    }

    // Update student
    static updateStudent(req, res) {
        const { id } = req.params;
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: "Name and Email are required" });
        }

        StudentModel.updateStudent(id, name, email, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({
                message: "Student updated successfully",
                id,
                name,
                email,
            });
        });
    }

    // Delete student
    static deleteStudent(req, res) {
        const { id } = req.params;

        StudentModel.deleteStudent(id, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ message: "Student deleted successfully" });
        });
    }
}

module.exports = StudentController;
