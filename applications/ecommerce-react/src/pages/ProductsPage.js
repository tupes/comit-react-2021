import React, { useContext } from "react";

import ProductCategories from "../components/classComponents/ProductCategories.js";
import ProductsList from "../components/ProductsList.js";

import { ProductsContext } from "../providers/ProductsProvider";
import { CartContext } from "../providers/CartProvider";

export default function ProductsPage(props) {
  const {
    products,
    productCategories,
    selectedCategories,
    handleSelectCategory,
  } = useContext(ProductsContext);

  const { handleAddToCart } = useContext(CartContext);

  return (
    <>
      <ProductCategories
        productCategories={productCategories}
        selectedCategories={selectedCategories}
        handleSelectCategory={handleSelectCategory}
      />
      <ProductsList
        products={products}
        isUserLoggedIn={props.isUserLoggedIn}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
}
