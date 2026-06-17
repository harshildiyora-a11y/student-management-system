const validateStudentData = (name, email) => {
  const errors = [];

  if (!name || name.trim() === "") {
    errors.push("Name is required");
  }

  if (!email || email.trim() === "") {
    errors.push("Email is required");
  } else if (!isValidEmail(email)) {
    errors.push("Email is invalid");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

module.exports = {
  validateStudentData,
  isValidEmail,
};