import React from "react";

import Product from "./Product.js";

export default function ProductsList(props) {
  return (
    <section className="items">
      <ul>
        {props.products.map((product) => (
          <Product
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            description={product.description}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
}
