import React from "react";
import "./CategoryFilter.css";
import CategoryButton from "../Components/CategoryButton";


export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const handleClick = (category) => {
    if (selectedCategory === category) {
      onSelectCategory(null);
    } else {
      onSelectCategory(category);
    }
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          isActive={selectedCategory === category}
          onClick={() => handleClick(category)}
        />
      ))}
    </div>
  );
}
