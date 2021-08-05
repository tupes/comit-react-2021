import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../providers/UserProvider";
import { CartContext } from "../providers/CartProvider";

export default function Header(props) {
  const { user, handleLogout } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const cartCount = cart && cart.length;

  return (
    <header>
      <h1 id="products">
        <Link className="link" to="/products">
          {props.title}
        </Link>
      </h1>
      {user ? (
        <div>
          {cartCount > 0 ? (
            <Link className="link" to="/cart">{`Cart: ${cartCount}`}</Link>
          ) : null}
          <button id="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button>
            <Link className="link" to="/signup">
              {props.buttonText}
            </Link>
          </button>
          <button>
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
        </div>
      )}
    </header>
  );
}
