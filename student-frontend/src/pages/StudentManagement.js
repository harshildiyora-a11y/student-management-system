import React, { useEffect, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";
import { useStudent } from "../hooks/useStudent";

const StudentManagement = () => {
  const { students, loading, error, fetchStudents, addStudent, updateStudentRecord, removeStudent } = useStudent();
  const [editingStudent, setEditingStudent] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const handleAddStudent = async (formData) => {
    try {
      await addStudent(formData.name, formData.email);
      setSuccessMessage(editingStudent ? "Student updated successfully!" : "Student added successfully!");
      setEditingStudent(null);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await removeStudent(id);
        setSuccessMessage("Student deleted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      } catch (err) {
        console.error("Error:", err);
      }
    }
  };

  return (
    <div className="student-management">
      <h1>Student Management System</h1>
      {error && <ErrorMessage message={error} />}
      {successMessage && <SuccessMessage message={successMessage} />}
      <StudentForm onSubmit={handleAddStudent} editingStudent={editingStudent} loading={loading} />
      <StudentList students={students} onEdit={handleEditStudent} onDelete={handleDeleteStudent} loading={loading} />
    </div>
  );
};

export default StudentManagement;
