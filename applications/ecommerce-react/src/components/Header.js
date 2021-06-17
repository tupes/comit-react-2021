import React from "react";

export default function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <button>
        <a href="signup.html">{props.buttonText}</a>
      </button>
    </header>
  );
}
