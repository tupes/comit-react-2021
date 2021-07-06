import React from "react";

export default function Product(props) {
  return (
    <li>
      <img src={props.imageUrl} alt="" />
      <h3>{props.name}</h3>
      <div>${props.price}</div>
      <p>{props.description}</p>
      <button>Add to cart</button>
    </li>
  );
}
