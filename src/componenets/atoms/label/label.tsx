import React from "react";

interface LabelProps {
  text: string;
  // Additional props like className, style, etc., can be added as needed
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return <label className="custom-label">{text}</label>;
};

export default Label;
