import React from "react";

export default function Button({ children, onClick, type = "button", ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn btn-primary"
      {...props}
    >
      {children}
    </button>
  );
}
