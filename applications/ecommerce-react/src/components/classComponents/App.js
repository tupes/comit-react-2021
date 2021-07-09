import React from "react";

import SignupPage from "../../pages/SignupPage.js";
import LoginPage from "../../pages/LoginPage.js";

import Header from "./Header.js";
import ProductCategories from "./ProductCategories.js";
import ProductsList from "../ProductsList.js";
import Footer from "../Footer.js";

import * as dataRepository from "../../services/dataRepository.js";
import * as userRepository from "../../services/userRepository.js";

function getButtonText() {
  return Math.random() > 0.5 ? "Sign up" : "Create an account";
}

class App extends React.Component {
  state = {
    currentPage: "products",
    user: null,
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

  handleHomeNavigation = () => {
    this.setState({ currentPage: "products" });
  };

  handleSignupNavigation = (event) => {
    this.setState({ currentPage: "signup" });
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

  handleCreateUser = async (formValues) => {
    const response = await userRepository.createUser(formValues);
    const user = {
      id: response.data.id,
      username: response.data.username,
      email: response.data.email,
    };
    this.setState({ user, currentPage: "products" });
  };

  handleLogin = async (formValues) => {
    const response = await userRepository.loginUser(formValues);
    const user = {
      id: response.data.id,
      username: response.data.username,
      email: response.data.email,
    };
    this.setState({ user, currentPage: "products" });
  };

  handleLogout = () => {
    this.setState({ user: null });
  };

  handleAddToCart = async (event) => {
    if (!this.state.user) return;

    const response = await userRepository.addProductToCart({
      userId: this.state.user.id,
      productId: parseInt(event.target.id),
    });
  };

  render() {
    console.log(
      `App component rendering with ${this.state.products.length} products`
    );

    let page;
    if (this.state.currentPage === "products") {
      page = (
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
            handleAddToCart={this.handleAddToCart}
          />
        </>
      );
    } else if (this.state.currentPage === "signup") {
      page = <SignupPage handleSubmit={this.handleCreateUser} />;
    } else {
      page = <LoginPage handleSubmit={this.handleLogin} />;
    }

    return (
      <div className="container">
        <Header
          title="Sports Store"
          isUserLoggedIn={this.state.user}
          buttonText={getButtonText()}
          handleNavigation={this.handleNavigation}
          handleLogout={this.handleLogout}
        />
        {page}
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
