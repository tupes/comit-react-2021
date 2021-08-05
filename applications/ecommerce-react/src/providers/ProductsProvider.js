import React, { useState, useEffect, createContext } from "react";

import * as dataRepository from "../services/dataRepository.js";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      console.log("In useEffect function");

      try {
        const [productCategories, products] = await Promise.all([
          dataRepository.loadProductCategoriesData(),
          dataRepository.loadProductsData(),
        ]);

        setProducts(products);
        setProductCategories(productCategories);
      } catch (err) {
        setError(err);
      }
    };

    loadData();
  }, []);

  const handleSelectCategory = (event) => {
    const category = event.target.id;

    let updatedSelectedCategories;
    if (selectedCategories.includes(category)) {
      updatedSelectedCategories = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      );
    } else {
      updatedSelectedCategories = [...selectedCategories, category];
    }
    setSelectedCategories(updatedSelectedCategories);
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedCategories.includes(product.category) ||
      !selectedCategories.length
  );

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        productCategories,
        selectedCategories,
        handleSelectCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
