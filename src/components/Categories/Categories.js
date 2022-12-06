import React from "react";

export const Categories = ({ category, activeCategory, filterItems }) => {
  return (
    <button
    className={`${
      activeCategory === category ? "filter-btn active" : "filter-btn"
    }`}
    onClick={() => filterItems(category)}
    >
      {category}
    </button>
  );
}