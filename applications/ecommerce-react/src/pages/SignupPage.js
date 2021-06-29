import React, { Component } from "react";

export default class SignupPage extends Component {
  state = {
    username: "",
    email: "",
    dob: "",
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
                Username
                <input
                  onChange={this.handleChange}
                  value={this.state.username}
                  type="text"
                  name="username"
                  required
                />
              </label>
            </li>
            <li>
              <label>
                Email
                <input
                  onChange={this.handleChange}
                  value={this.state.email}
                  type="email"
                  name="email"
                  required
                />
              </label>
            </li>
            <li>
              <label>
                Date of Birth
                <input
                  onChange={this.handleChange}
                  value={this.state.dob}
                  type="date"
                  name="dob"
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
            </li>
          </ul>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
