import React, { useEffect, useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage.js";
import CartPage from "./pages/CartPage.js";
import SignupPage from "./pages/SignupPage.js";
import LoginPage from "./pages/LoginPage.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import { ErrorContext } from "./providers/ErrorProvider";
import { UserContext } from "./providers/UserProvider";
import { CartContext } from "./providers/CartProvider";

function getButtonText() {
  return Math.random() > 0.5 ? "Sign up" : "Create an account";
}

function App() {
  const { error, setError } = useContext(ErrorContext);
  const { user, createUser, loginUser } = useContext(UserContext);
  const { cart, getUserCart } = useContext(CartContext);

  const history = useHistory();

  useEffect(() => {
    if (!cart.length && user && user.id) {
      getUserCart(user.id);
    }
  }, [user, cart]);

  const handleUserRequest = async (userFunc, formValues) => {
    await userFunc(formValues);

    setError(null);
    history.push("/products");
  };

  const handleCreateUser = async (formValues) => {
    await handleUserRequest(createUser, formValues);
  };

  const handleLogin = async (formValues) => {
    await handleUserRequest(loginUser, formValues);
  };

  return (
    <div className="container">
      <Header title="Sports Store" buttonText={getButtonText()} />

      <Route path="/login" exact>
        <LoginPage handleSubmit={handleLogin} error={error} />
      </Route>
      <Route path="/signup" exact>
        <SignupPage handleSubmit={handleCreateUser} error={error} />
      </Route>
      <Route path="/products" exact>
        <ProductsPage isUserLoggedIn={user} error={error} />
      </Route>
      <Route path="/cart" exact>
        <CartPage isUserLoggedIn={user} error={error} />
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
