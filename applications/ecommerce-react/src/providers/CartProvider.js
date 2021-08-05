import React, { useState, useContext, createContext } from "react";

import * as userRepository from "../services/userRepository.js";
import { UserContext } from "./UserProvider";
import { ProductsContext } from "./ProductsProvider";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const { user } = useContext(UserContext);
  const { products } = useContext(ProductsContext);

  const [cart, setCart] = useState(null);
  const [cartLoadingError, setCartLoadingError] = useState(null);
  const [cartUpdateError, setCartUpdateError] = useState(null);

  const loadUserCart = async () => {
    try {
      const cartResponse = await userRepository.getCart(user.id);
      setCart(cartResponse.data);
    } catch (error) {
      setCartLoadingError(error);
    }
  };

  const getUserCart = () => {
    if (!cart) return null;

    const cartProducts = {};

    cart &&
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
      });

    return Object.values(cartProducts);
  };

  const getTotalPrice = () => {
    const userCart = getUserCart();
    if (!userCart) return 0;

    let totalPrice = 0;
    userCart.forEach(({ quantity, price }) => {
      totalPrice += quantity * price;
    });
    return totalPrice;
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
      setCartUpdateError(error);
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
      setCartUpdateError(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        loadUserCart,
        cart: getUserCart(),
        totalPrice: getTotalPrice(),
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
