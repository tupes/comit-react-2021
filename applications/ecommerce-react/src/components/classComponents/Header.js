import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 id="products" onClick={this.props.handleNavigation}>
          {this.props.title}
        </h1>
        <button id="signup" onClick={this.props.handleNavigation}>
          {this.props.buttonText}
        </button>
      </header>
    );
  }
}
