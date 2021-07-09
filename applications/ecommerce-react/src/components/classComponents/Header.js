import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 id="products" onClick={this.props.handleNavigation}>
          {this.props.title}
        </h1>
        {this.props.isUserLoggedIn ? (
          <button id="logout" onClick={this.props.handleLogout}>
            Logout
          </button>
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
