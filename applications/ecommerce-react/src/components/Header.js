import React from "react";

import { welcome, messageTarget } from "../utils.js";

export default function Header() {
  return (
    <header>
      <h1>Sports Store</h1>
      <div>{`${welcome} ${messageTarget}`}</div>
      <button>
        <a href="signup.html">Sign up</a>
      </button>
    </header>
  );
}
