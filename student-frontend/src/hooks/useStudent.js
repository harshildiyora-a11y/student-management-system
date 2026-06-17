import { useState, useCallback } from "react";
import StudentService from "../services/StudentService";

export const useStudent = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStudents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await StudentService.getAllStudents();
      setStudents(data);
    } catch (err) {
      setError(err?.message || "Failed to fetch students");
    } finally {
      setLoading(false);
    }
  }, []);

  const addStudent = useCallback(async (name, email) => {
    setLoading(true);
    setError(null);
    try {
      const response = await StudentService.createStudent(name, email);
      setStudents((prev) => [...prev, response.data]);
      return response;
    } catch (err) {
      setError(err?.message || "Failed to create student");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateStudentRecord = useCallback(async (id, name, email) => {
    setLoading(true);
    setError(null);
    try {
      const response = await StudentService.updateStudent(id, name, email);
      setStudents((prev) =>
        prev.map((student) => (student.Id === id ? { ...student, Name: name, Email: email } : student))
      );
      return response;
    } catch (err) {
      setError(err?.message || "Failed to update student");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeStudent = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await StudentService.deleteStudent(id);
      setStudents((prev) => prev.filter((student) => student.Id !== id));
      return response;
    } catch (err) {
      setError(err?.message || "Failed to delete student");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { students, loading, error, fetchStudents, addStudent, updateStudentRecord, removeStudent };
};
