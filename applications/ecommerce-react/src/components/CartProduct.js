import React from "react";
import ProductInfo from "./ProductInfo";

export default function CartProduct(props) {
  return (
    <li>
      <ProductInfo
        imageUrl={props.imageUrl}
        name={props.name}
        price={props.price}
        description={props.description}
      />
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
