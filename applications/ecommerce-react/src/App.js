import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage.js";
import SignupPage from "./pages/SignupPage.js";
import LoginPage from "./pages/LoginPage.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import * as dataRepository from "./services/dataRepository.js";
import * as userRepository from "./services/userRepository.js";
import * as authRepository from "./services/firebaseClient.js";

function getButtonText() {
  return Math.random() > 0.5 ? "Sign up" : "Create an account";
}

function App() {
  // state = {
  //   error: null,
  //   user: null,
  //   cart: [],
  //   selectedCategories: [],
  //   products: [],
  //   productCategories: [],
  // };

  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);

  // async componentDidMount() {
  //   console.log("App component mounted");
  //   const [productCategories, products] = await Promise.all([
  //     dataRepository.loadProductCategoriesData(),
  //     dataRepository.loadProductsData(),
  //   ]);

  //   this.setState({ products, productCategories });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(`App component updated`);
  // }

  const handleSelectCategory = (event) => {
    const category = event.target.id;

    let selectedCategories;
    if (selectedCategories.includes(category)) {
      selectedCategories = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      );
    } else {
      selectedCategories = [...selectedCategories, category];
    }
    this.setState({ selectedCategories });
  };

  const handleCreateUser = async (formValues) => {
    try {
      const authResponse = await authRepository.createUserAccount(
        formValues.email,
        formValues.password
      );

      const response = await userRepository.createUser({
        ...formValues,
        uid: authResponse.user.uid,
      });
      const user = {
        id: response.data.id,
        uid: response.data.uid,
        username: response.data.username,
        email: response.data.email,
      };
      this.setState({ user });
    } catch (error) {
      console.log(`Error from creating user: ${{ error }}`);
    }
  };

  const handleLogin = async (formValues) => {
    try {
      const authResponse = await authRepository.loginToAccount(
        formValues.email,
        formValues.password
      );

      const response = await userRepository.loginUser({
        uid: authResponse.user.uid,
      });
      const userData = response.data[0];
      const user = {
        id: userData.id,
        uid: userData.uid,
        username: userData.username,
        email: userData.email,
      };
      const cartResponse = await userRepository.getCart(user.id);
      this.props.history.push("/products");
      this.setState({
        user,
        cart: cartResponse.data,
        error: null,
      });
    } catch (error) {
      let errorMessage = "Something went wrong";
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        errorMessage = "Unable to login";
      }
      console.log(errorMessage);
      this.setState({ error: errorMessage });
    }
  };

  const handleLogout = async () => {
    await authRepository.logout();
    this.setState({ user: null });
  };

  const handleAddToCart = async (event) => {
    if (!user) return;

    try {
      const response = await userRepository.addProductToCart({
        userId: user.id,
        productId: parseInt(event.target.id),
      });
      if (response.status >= 400) {
        throw new Error(`Response status code from server: ${response.status}`);
      }

      const addedProduct = response.data;
      const updatedCart = [...cart, addedProduct];
      this.setState({ cart: updatedCart });
    } catch (error) {
      console.error(`Error thrown from handleAddToCart: ${error.message}`);
      this.setState({ error: "Unable to add product to cart" });
    }
  };

  return (
    <div className="container">
      <Header
        title="Sports Store"
        isUserLoggedIn={user}
        cartCount={cart && cart.length}
        buttonText={getButtonText()}
        handleLogout={handleLogout}
      />

      <Route path="/login" exact>
        <LoginPage handleSubmit={handleLogin} error={error} />
      </Route>
      <Route path="/signup" exact>
        <SignupPage handleSubmit={handleCreateUser} />
      </Route>
      <Route path="/products" exact>
        <ProductsPage
          productCategories={productCategories}
          selectedCategories={selectedCategories}
          products={products}
          handleSelectCategory={handleSelectCategory}
          handleAddToCart={handleAddToCart}
          isUserLoggedIn={user}
        />
      </Route>
      <Redirect to="/products" />

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

export default App;
