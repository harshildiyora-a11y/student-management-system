const db = require("../config/db");

class StudentModel {
    // Get all students
    static getAllStudents(callback) {
        db.all("SELECT * FROM Students", (err, rows) => {
            callback(err, rows);
        });
    }

    // Get student by ID
    static getStudentById(id, callback) {
        db.get("SELECT * FROM Students WHERE Id = ?", [id], (err, row) => {
            callback(err, row);
        });
    }

    // Create a new student
    static createStudent(name, email, callback) {
        db.run(
            "INSERT INTO Students (Name, Email) VALUES (?, ?)",
            [name, email],
            function (err) {
                callback(err, this.lastID);
            }
        );
    }

    // Update student
    static updateStudent(id, name, email, callback) {
        db.run(
            "UPDATE Students SET Name = ?, Email = ? WHERE Id = ?",
            [name, email, id],
            (err) => {
                callback(err);
            }
        );
    }

    // Delete student
    static deleteStudent(id, callback) {
        db.run("DELETE FROM Students WHERE Id = ?", [id], (err) => {
            callback(err);
        });
    }
}

module.exports = StudentModel;
