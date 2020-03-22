import React, { useRef } from "react";

export default function SearchBox({ onSearch, onClear }) {
  const searchInput = useRef(null);

  const handleClearClick = e => {
    e.preventDefault();
    searchInput.current.value = "";
    onClear();
  };
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = new FormData(e.target).get("search-input");
    onSearch(searchQuery);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">
        Search here:
        <input
          ref={searchInput}
          id="search-input"
          name="search-input"
          placeholder="Search transactions"
          type="text"
        />
      </label>
      <button type="submit">Go!</button>
      <button onClick={handleClearClick} type="button">
        Clear
      </button>
    </form>
  );
}
