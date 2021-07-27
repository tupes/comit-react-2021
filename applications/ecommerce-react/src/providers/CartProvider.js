import React, { useState, useContext, createContext } from "react";

import * as userRepository from "../services/userRepository.js";
import { UserContext } from "./UserProvider";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState([]);

  const getUserCart = async () => {
    const cartResponse = await userRepository.getCart(user.id);
    setCart(cartResponse.data);
  };

  const handleAddToCart = async (productId) => {
    try {
      const response = await userRepository.addProductToCart({
        userId: user.id,
        productId,
      });
      if (response.status >= 400) {
        throw new Error(`Response status code from server: ${response.status}`);
      }

      const addedProduct = response.data;
      const updatedCart = [...cart, addedProduct];
      setCart(updatedCart);
    } catch (error) {
      console.error(`Error thrown from handleAddToCart: ${error.message}`);
      // setError("Unable to add product to cart");
    }
  };

  const handleRemoveFromCart = async (cartProductId) => {
    try {
      const response = await userRepository.removeProductFromCart(
        cartProductId
      );
      if (response.status >= 400) {
        throw new Error(`Response status code from server: ${response.status}`);
      }

      const updatedCart = cart.filter(
        (cartProduct) => cartProduct.id !== cartProductId
      );
      setCart(updatedCart);
    } catch (error) {
      console.error(
        `Error thrown from removeProductFromCart: ${error.message}`
      );
      // setError("Unable to add product to cart");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, getUserCart, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
