import React from "react";

export default function SearchBar({ term, setTerm }) {
  return (
    <div>
      <input
        placeholder="Search by title, description or author.."
        value={term}
        onChange={({ target }) => {
          setTerm(target.value);
        }}
      />
    </div>
  );
}
