// SearchBar.tsx
import React from "react";
import "./searchBar.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search rooms..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
