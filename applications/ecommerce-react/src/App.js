import React, { useState, useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage.js";
import SignupPage from "./pages/SignupPage.js";
import LoginPage from "./pages/LoginPage.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import * as userRepository from "./services/userRepository.js";
import * as authRepository from "./services/firebaseClient.js";

import { UserContext } from "./providers/UserProvider";
import { CartContext } from "./providers/CartProvider";

function getButtonText() {
  return Math.random() > 0.5 ? "Sign up" : "Create an account";
}

function App() {
  const { user, setUser } = useContext(UserContext);
  const { setCart } = useContext(CartContext);

  const [error, setError] = useState(null);

  const history = useHistory();

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

      setUser(user);

      history.push("/products");
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

      setUser(user);
      setCart(cartResponse.data);
      setError(null);

      history.push("/products");
    } catch (error) {
      let errorMessage = "Something went wrong";
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        errorMessage = "Unable to login";
      }
      console.log(errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className="container">
      <Header title="Sports Store" buttonText={getButtonText()} />

      <Route path="/login" exact>
        <LoginPage handleSubmit={handleLogin} error={error} />
      </Route>
      <Route path="/signup" exact>
        <SignupPage handleSubmit={handleCreateUser} />
      </Route>
      <Route path="/products" exact>
        <ProductsPage />
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
