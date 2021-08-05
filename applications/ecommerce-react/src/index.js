import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import App from "./components/classComponents/App";
import App from "./App";
import UserProvider from "./providers/UserProvider";
import ProductsProvider from "./providers/ProductsProvider";
import CartProvider from "./providers/CartProvider";

ReactDOM.render(
  <Router>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </Router>,
  document.getElementById("root")
);
