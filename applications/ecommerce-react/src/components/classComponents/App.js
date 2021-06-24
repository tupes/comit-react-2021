import React from "react";

import Header from "./Header.js";
import ProductCategories from "./ProductCategories.js";
import ProductsList from "../ProductsList.js";
import Footer from "../Footer.js";

import products from "../../data/products.json";

function getButtonText() {
  return Math.random() > 0.5 ? "Sign up" : "Create an account";
}

class App extends React.Component {
  state = {
    selectedCategory: null,
  };

  handleSelectCategory = (event) => {
    console.log(`Event of type ${event.type} caused by ${event.target.id}`);
    this.setState({ selectedCategory: event.target.id });
  };

  render() {
    return (
      <div className="container">
        <Header title="Sports Store" buttonText={getButtonText()} />
        <ProductCategories
          selectedCategory={this.state.selectedCategory}
          handleSelectCategory={this.handleSelectCategory}
        />
        <ProductsList
          products={products.filter(
            (product) =>
              product.category === this.state.selectedCategory ||
              !this.state.selectedCategory
          )}
        />
        <Footer email="sports_store@store.com" phone="780-555-5556">
          <h4>Contact us</h4>
          <p>
            We've been in business since 1972, providing you with all your
            sporting needs!
          </p>
        </Footer>
      </div>
    );
  }
}

export default App;
