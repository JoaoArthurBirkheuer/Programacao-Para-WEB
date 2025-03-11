import React from 'react';

export default function Button({ children, onClick, type = "button", ...props }) {
  const buttonStyle = {
    backgroundColor: '#3b82f6', // Azul do Tailwind
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2563eb', // Azul escuro do Tailwind
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = buttonStyle.backgroundColor;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
