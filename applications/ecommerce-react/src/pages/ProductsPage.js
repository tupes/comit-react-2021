import React, { Component } from "react";

import ProductCategories from "../components/classComponents/ProductCategories.js";
import ProductsList from "../components/ProductsList.js";

export default class ProductsPage extends Component {
  render() {
    return (
      <>
        <ProductCategories
          productCategories={this.props.productCategories}
          selectedCategories={this.props.selectedCategories}
          handleSelectCategory={this.props.handleSelectCategory}
        />
        <ProductsList
          products={this.props.products.filter(
            (product) =>
              this.props.selectedCategories.includes(product.category) ||
              !this.props.selectedCategories.length
          )}
          isUserLoggedIn={this.props.isUserLoggedIn}
          handleAddToCart={this.props.handleAddToCart}
        />
      </>
    );
  }
}
