import React, { useState, useContext, createContext } from "react";

import * as userRepository from "../services/userRepository.js";
import { UserContext } from "./UserProvider";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState([]);

  const handleAddToCart = async (event) => {
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
      setCart(updatedCart);
    } catch (error) {
      console.error(`Error thrown from handleAddToCart: ${error.message}`);
      // setError("Unable to add product to cart");
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}
