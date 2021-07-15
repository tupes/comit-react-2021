import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  };

  render() {
    return (
      <>
        <div></div>
        <form className="user-form" onSubmit={this.handleSubmit} method="post">
          <p>{this.props.error}</p>
          <ul>
            <li>
              <label>
                Email
                <input
                  onChange={this.handleChange}
                  value={this.state.email}
                  type="email"
                  name="email"
                />
              </label>
            </li>
            <li>
              <label>
                Password
                <input
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                  name="password"
                />
              </label>
            </li>{" "}
          </ul>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
