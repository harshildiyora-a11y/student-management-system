const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../../database/students.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    } else {
        console.log("Connected to SQLite Database");
        initializeDatabase();
    }
});

function initializeDatabase() {
    db.run(
        `CREATE TABLE IF NOT EXISTS Students (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Email TEXT NOT NULL
        )`,
        (err) => {
            if (err) {
                console.error("Error creating table:", err);
            } else {
                console.log("Students table ready");
            }
        }
    );
}

module.exports = db;
