import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.buttonText = props.buttonText;
  }

  render() {
    return (
      <header>
        <h1>{this.title}!</h1>
        <button>
          <a href="signup.html">{this.buttonText}</a>
        </button>
      </header>
    );
  }
}
