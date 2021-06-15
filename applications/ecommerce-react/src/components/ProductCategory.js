import React from "react";

export default function ProductCategory(props) {
  return (
    <li>
      <button>
        <a href={`pages/${props.category}.html`}>{props.category}</a>
      </button>
    </li>
  );
}
