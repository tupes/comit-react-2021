import React from "react";

import CartProduct from "./CartProduct.js";

export default function CartProductsList(props) {
  return (
    <section className="items">
      <ul>
        {props.products.map((product) => (
          <CartProduct
            cartProductId={product.cartProductId}
            productId={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            description={product.description}
            quantity={product.quantity}
            handleAddToCart={props.handleAddToCart}
            handleRemoveFromCart={props.handleRemoveFromCart}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
}
