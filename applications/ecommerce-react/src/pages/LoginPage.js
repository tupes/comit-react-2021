import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    id: "",
    username: "",
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
        <form onSubmit={this.handleSubmit} method="post">
          <ul>
            <li>
              <label>
                ID
                <input
                  onChange={this.handleChange}
                  value={this.state.id}
                  type="number"
                  name="id"
                />
              </label>
            </li>
            <li>
              <label>
                Username
                <input
                  onChange={this.handleChange}
                  value={this.state.username}
                  type="text"
                  name="username"
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
