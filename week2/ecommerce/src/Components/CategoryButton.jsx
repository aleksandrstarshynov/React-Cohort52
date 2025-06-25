import React from "react";
import "./CategoryButton.css"; 

export default function CategoryButton({ category, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`category-button ${isActive ? "active" : ""}`}
    >
      {category}
    </button>
  );
}
