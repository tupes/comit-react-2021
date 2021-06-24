import React from "react";

import ProductCategory from "./classComponents/ProductCategory.js";
import productCategories from "../data/productCategories.json";

export default function ProductCategories() {
  return (
    <section className="categories">
      <ul>
        {productCategories.map((productCategory) => (
          <ProductCategory category={productCategory} key={productCategory} />
        ))}
      </ul>
    </section>
  );
}
