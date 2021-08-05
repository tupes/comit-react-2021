import React, { useContext } from "react";

import CartProductsList from "../components/CartProductsList.js";
import CartSummary from "../components/CartSummary.js";

import { CartContext } from "../providers/CartProvider";

export default function CartPage(props) {
  const { cart, totalPrice, handleAddToCart, handleRemoveFromCart } =
    useContext(CartContext);

  return (
    <main className="cart-page">
      {props.error ? <p>{props.error}</p> : null}
      <CartProductsList
        products={cart}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        isUserLoggedIn={props.isUserLoggedIn}
      />
      <CartSummary totalPrice={totalPrice} />
    </main>
  );
}
