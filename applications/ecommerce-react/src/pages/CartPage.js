import React, { useContext } from "react";

import CartProductsList from "../components/CartProductsList.js";
import CartSummary from "../components/CartSummary.js";

import { ProductsContext } from "../providers/ProductsProvider";
import { CartContext } from "../providers/CartProvider";

export default function CartPage(props) {
  const { products } = useContext(ProductsContext);
  const { cart, handleAddToCart, handleRemoveFromCart } =
    useContext(CartContext);

  const cartProducts = {};
  let totalPrice = 0;
  cart.forEach((cartProduct) => {
    const product = products.find(
      (product) => product.id === cartProduct.productId
    );
    if (cartProducts[product.id]) {
      cartProducts[product.id].quantity += 1;
    } else {
      cartProducts[product.id] = {
        ...product,
        quantity: 1,
        cartProductId: cartProduct.id,
      };
    }
    totalPrice += product.price;
  });

  return (
    <main className="cart-page">
      <CartProductsList
        products={Object.values(cartProducts)}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        isUserLoggedIn={props.isUserLoggedIn}
      />
      <CartSummary totalPrice={totalPrice} />
    </main>
  );
}
