import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  // Additional props like disabled, className, etc., can be added as needed
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="custom-button">
      {label}
    </button>
  );
};

export default Button;
