import React from "react";

export default function ProductCategory(props) {
  const { category, isSelected, handleClick } = props;
  const capitalizedCategory = category[0].toUpperCase() + category.slice(1);

  return (
    <li>
      <button
        className={isSelected ? "selected-category" : ""}
        id={category}
        onClick={handleClick}
      >
        {capitalizedCategory}
      </button>
    </li>
  );
}
