import React from "react";

const SearchFilter = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search snippets..."
      className="search-bar"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchFilter;
