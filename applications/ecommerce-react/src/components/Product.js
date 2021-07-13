import React from "react";

export default function Product(props) {
  return (
    <li>
      <img src={props.imageUrl} alt="" />
      <h3>{props.name}</h3>
      <div>${props.price}</div>
      <p>{props.description}</p>
      {props.isUserLoggedIn && (
        <button id={props.productId} onClick={props.handleAddToCart}>
          Add to cart
        </button>
      )}
    </li>
  );
}
