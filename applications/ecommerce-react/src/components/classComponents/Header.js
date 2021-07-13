import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 id="products" onClick={this.props.handleNavigation}>
          {this.props.title}
        </h1>
        {this.props.isUserLoggedIn ? (
          <div>
            <button id="cart" onClick={this.props.handleNavigation}>
              {`Cart: ${this.props.cartCount}`}
            </button>
            <button id="logout" onClick={this.props.handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button id="signup" onClick={this.props.handleNavigation}>
              {this.props.buttonText}
            </button>
            <button id="login" onClick={this.props.handleNavigation}>
              Login
            </button>
          </div>
        )}
      </header>
    );
  }
}
