import React from 'react';

export default function Filter({ filter, handleChange }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className="search"
        onChange={handleChange}
        type="text"
        name="filter"
        value={filter}
      />
    </div>
  );
}
