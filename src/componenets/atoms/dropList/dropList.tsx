import React, { useState } from "react";
import "./dropList.css";
import { ListMinus, TableCellsMerge } from "lucide-react";

interface DropdownProps {
  selectedOption: string;
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedOption,
  options,
  onSelect,
}) => {
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Custom function to render the icon based on the selected option
  const renderOptionIcon = (option: string) => {
    if (option === "list") {
      return <ListMinus color="#0F2554" size={30} />;
    } else if (option === "grid") {
      return <TableCellsMerge color="#0F2554" size={30} />;
    }

    return null;
  };

  return (
    <div className="drop-list-container">
      <div
        className={`drop-list-header ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="selected-option">
          {selectedOption} mode
          {renderOptionIcon(selectedOption)}
        </div>
      </div>
      {isOpen && (
        <div className="options-container">
          {options.map((option) => (
            <div
              key={option}
              className={`option ${
                option === selectedOption ? "selected" : ""
              }`}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option} mode
              {renderOptionIcon(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
