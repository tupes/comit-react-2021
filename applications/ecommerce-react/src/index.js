import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import App from "./components/classComponents/App";
import App from "./App";
import ErrorProvider from "./providers/ErrorProvider";
import UserProvider from "./providers/UserProvider";
import ProductsProvider from "./providers/ProductsProvider";
import CartProvider from "./providers/CartProvider";

ReactDOM.render(
  <Router>
    <ErrorProvider>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </ErrorProvider>
  </Router>,
  document.getElementById("root")
);
