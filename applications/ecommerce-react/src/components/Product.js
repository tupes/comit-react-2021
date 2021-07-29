import React from "react";
import ProductInfo from "./ProductInfo";

export default function Product(props) {
  return (
    <li>
      <ProductInfo
        imageUrl={props.imageUrl}
        name={props.name}
        price={props.price}
        description={props.description}
      />
      {props.isUserLoggedIn && (
        <button onClick={() => props.handleAddToCart(props.productId)}>
          Add to cart
        </button>
      )}
    </li>
  );
}
