import React from "react";

export default function ProductCategory(props) {
  const { category } = props;
  const capitalizedCategory = category[0].toUpperCase() + category.slice(1);

  const handleClick = (event) => {
    console.log(`Event of type ${event.type} caused by ${event.target.id}`);
  };

  return (
    <li>
      <button id={category} onClick={handleClick}>
        {capitalizedCategory}
      </button>
    </li>
  );
}
