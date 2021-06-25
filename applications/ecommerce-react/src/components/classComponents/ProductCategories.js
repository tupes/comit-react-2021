import React from "react";

import ProductCategory from "./ProductCategory.js";
import productCategories from "../../data/productCategories.json";

export default class ProductCategories extends React.Component {
  render() {  
    return (
      <section className="categories">
        <ul>
          {productCategories.map((productCategory) => (
            <ProductCategory
              category={productCategory}
              isSelected={this.props.selectedCategories.includes(productCategory)}
              handleClick={this.props.handleSelectCategory}
              key={productCategory}
            />
          ))}
        </ul>
      </section>
    );
  }
}
