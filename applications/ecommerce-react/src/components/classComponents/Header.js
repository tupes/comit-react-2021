import React from "react";

export default class Header extends React.Component {
  render() {
    console.log(`Rendering Header`);

    return (
      <header>
        <h1>{this.props.title}!</h1>
        <button>
          <a href="signup.html">{this.props.buttonText}</a>
        </button>
      </header>
    );
  }
}
