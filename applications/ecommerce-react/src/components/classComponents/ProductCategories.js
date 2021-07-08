import React from "react";

import ProductCategory from "./ProductCategory.js";

export default class ProductCategories extends React.Component {
  render() {
    return (
      <section className="categories">
        <ul>
          {this.props.productCategories.map((productCategory) => (
            <ProductCategory
              category={productCategory}
              isSelected={this.props.selectedCategories.includes(
                productCategory
              )}
              handleClick={this.props.handleSelectCategory}
              key={productCategory}
            />
          ))}
        </ul>
      </section>
    );
  }
}
