import React from "react";

import SignupPage from "../../pages/SignupPage.js";
import Header from "./Header.js";
import ProductCategories from "./ProductCategories.js";
import ProductsList from "../ProductsList.js";
import Footer from "../Footer.js";

import * as dataRepository from "../../services/dataRepository.js";

function getButtonText() {
  return Math.random() > 0.5 ? "Sign up" : "Create an account";
}

class App extends React.Component {
  state = {
    currentPage: "products",
    selectedCategories: [],
    products: [],
    productCategories: [],
  };

  async componentDidMount() {
    console.log("App component mounted");
    const [productCategories, products] = await Promise.all([
      dataRepository.loadProductCategoriesData(),
      dataRepository.loadProductsData(),
    ]);

    this.setState({ products, productCategories });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`App component updated`);
  }

  handleNavigation = (event) => {
    this.setState({ currentPage: event.target.id });
  };

  handleSelectCategory = (event) => {
    const category = event.target.id;

    let selectedCategories;
    if (this.state.selectedCategories.includes(category)) {
      selectedCategories = this.state.selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      );
    } else {
      selectedCategories = [...this.state.selectedCategories, category];
    }
    this.setState({ selectedCategories });
  };

  handleSubmit = (formValues) => {
    console.log("form submitted");
    this.setState({ currentPage: "products" });
  };

  render() {
    console.log(
      `App component rendering with ${this.state.products.length} products`
    );
    return (
      <div className="container">
        <Header
          title="Sports Store"
          buttonText={getButtonText()}
          handleNavigation={this.handleNavigation}
        />
        {this.state.currentPage === "products" ? (
          <>
            <ProductCategories
              productCategories={this.state.productCategories}
              selectedCategories={this.state.selectedCategories}
              handleSelectCategory={this.handleSelectCategory}
            />
            <ProductsList
              products={this.state.products.filter(
                (product) =>
                  this.state.selectedCategories.includes(product.category) ||
                  !this.state.selectedCategories.length
              )}
            />
          </>
        ) : (
          <SignupPage handleSubmit={this.handleSubmit} />
        )}

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
