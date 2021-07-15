import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 id="products">
          <Link to="/">{this.props.title}</Link>
        </h1>
        {this.props.isUserLoggedIn ? (
          <div>
            <Link to="/cart">{`Cart: ${this.props.cartCount}`}</Link>
            <button id="logout" onClick={this.props.handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button>
              <Link to="/signup">{this.props.buttonText}</Link>
            </button>
            <button>
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}
      </header>
    );
  }
}
