import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search posts by title..."
      value={query}
      onChange={handleSearchChange}
      className="bg-blue-800 h-10 px-10 pr-5 w-full rounded-full text-sm text-white placeholder-gray-400 border border-blue-500 focus:border-blue-300 focus:outline-none transition duration-300 transform hover:scale-105"
    />
  );
}

export default SearchBar;
