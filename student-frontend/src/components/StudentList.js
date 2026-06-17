import React from "react";

const StudentList = ({ students, onEdit, onDelete, loading }) => {
  if (loading) {
    return <div className="loading">Loading students...</div>;
  }

  if (students.length === 0) {
    return <div className="no-data">No students found</div>;
  }

  return (
    <div className="student-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.Id}>
              <td>{student.Id}</td>
              <td>{student.Name}</td>
              <td>{student.Email}</td>
              <td>
                <button onClick={() => onEdit(student)} className="btn-edit">
                  Edit
                </button>
                <button onClick={() => onDelete(student.Id)} className="btn-delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
