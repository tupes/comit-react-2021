import React, { useState } from "react";

export default function LoginPage(props) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await props.handleSubmit(formValues);
    } catch (error) {
      const errorMessage = "Invalid email or password";
      console.log(errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit} method="post">
      <p>{error}</p>
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
