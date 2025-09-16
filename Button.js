import React from 'react';

const Button = ({ variant = 'solid', disabled, children, onClick }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;