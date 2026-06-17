import React, { useState, useEffect } from "react";

const StudentForm = ({ onSubmit, editingStudent, loading }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingStudent) {
      setFormData({ name: editingStudent.Name, email: editingStudent.Email });
    } else {
      setFormData({ name: "", email: "" });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student name"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter student email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <button type="submit" disabled={loading} className="btn-submit">
        {loading ? "Processing..." : editingStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
