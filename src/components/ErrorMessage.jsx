import React from "react";

function ErrorMessage({ message, onRetry }) {
  return (
    <div>
      <p style={{ color: "red" }}>Error: {message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}

export default ErrorMessage;