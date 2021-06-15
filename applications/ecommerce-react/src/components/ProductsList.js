import React from "react";

import Product from "./Product.js";

import products from "../data/products.json";

export default function ProductsList() {
  const productComponents = [];

  products.forEach((product) => {
    const productComponent = (
      <Product
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        description={product.description}
      />
    );
    productComponents.push(productComponent);
  });

  return (
    <section class="items">
      <ul>{productComponents}</ul>
    </section>
  );
}

// Passed to Product component

// props = {
//   imageUrl: "imgs/ball.png",
//   name: "Soccer ball",
//   price: "44.00",
//   description: "The best soccer ball ever!",
// }
