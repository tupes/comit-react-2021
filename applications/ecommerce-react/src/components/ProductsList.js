import React from "react";

import Product from "./Product.js";

export default function ProductsList(props) {
  return (
    <section className="items">
      <ul>
        {props.products.map((product) => (
          <Product
            productId={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            description={product.description}
            isUserLoggedIn={props.isUserLoggedIn}
            handleAddToCart={props.handleAddToCart}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
}
