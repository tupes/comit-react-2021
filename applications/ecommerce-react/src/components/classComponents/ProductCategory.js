import React from "react";

export default class ProductCategory extends React.Component {
  render() {
    console.log(`Rendering ProductCategory ${this.props.category}`);
    return (
      <li>
        <button
          className={this.props.isSelected ? "selected-category" : ""}
          id={this.props.category}
          onClick={this.props.handleClick}
        >
          {this.props.category[0].toUpperCase() + this.props.category.slice(1)}
        </button>
      </li>
    );
  }
}
