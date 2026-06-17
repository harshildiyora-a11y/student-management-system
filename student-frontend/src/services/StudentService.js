import apiClient from "./apiClient";

const StudentService = {
  // Get all students
  getAllStudents: async () => {
    try {
      const response = await apiClient.get("/students");
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get student by ID
  getStudentById: async (id) => {
    try {
      const response = await apiClient.get(`/students/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Create a new student
  createStudent: async (name, email) => {
    try {
      const response = await apiClient.post("/students", { name, email });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update student
  updateStudent: async (id, name, email) => {
    try {
      const response = await apiClient.put(`/students/${id}`, { name, email });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete student
  deleteStudent: async (id) => {
    try {
      const response = await apiClient.delete(`/students/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default StudentService;
