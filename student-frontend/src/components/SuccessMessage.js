import React from "react";

const SuccessMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="success-message">
      <p>{message}</p>
      {onClose && (
        <button onClick={onClose} className="btn-close">
          ×
        </button>
      )}
    </div>
  );
};

export default SuccessMessage;
