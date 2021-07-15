import React from 'react';

export default function Filter({ filter, handleFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className="search"
        onChange={handleFilter}
        type="text"
        name="filter"
        value={filter}
      />
    </div>
  );
}
