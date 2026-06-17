import React from "react";

const ErrorMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="error-message">
      <p>{message}</p>
      {onClose && (
        <button onClick={onClose} className="btn-close">
          ×
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
