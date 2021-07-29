import React, { useState } from "react";

export default function LoginPage(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(formValues);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit} method="post">
      <p>{props.error}</p>
      <ul>
        <li>
          <label>
            Email
            <input
              onChange={handleChange}
              value={formValues.email}
              type="email"
              name="email"
              required
            />
          </label>
        </li>
        <li>
          <label>
            Password
            <input
              onChange={handleChange}
              value={formValues.password}
              type="password"
              name="password"
              required
            />
          </label>
        </li>{" "}
      </ul>

      <button type="submit">Submit</button>
    </form>
  );
}
