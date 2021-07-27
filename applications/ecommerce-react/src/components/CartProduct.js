import React from "react";

export default function CartProduct(props) {
  return (
    <li>
      <img src={props.imageUrl} alt="" />
      <h3>{props.name}</h3>
      <div>${props.price}</div>
      <p>{props.description}</p>
      <section>
        <button onClick={() => props.handleRemoveFromCart(props.cartProductId)}>
          -
        </button>
        <span className="quantity">{props.quantity}</span>
        <button onClick={() => props.handleAddToCart(props.productId)}>
          +
        </button>
        <span className="product-total">${props.price * props.quantity}</span>
      </section>
    </li>
  );
}
