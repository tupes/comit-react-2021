import React, { useState } from "react";

export default function SignupPage(props) {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormValues({ [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await props.handleSubmit(formValues);
    } catch (error) {
      const errorMessage = error.message;
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
            Username
            <input
              onChange={handleChange}
              value={formValues.username}
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
            Date of Birth
            <input
              onChange={handleChange}
              value={formValues.dob}
              type="date"
              name="dob"
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
            />
          </label>
        </li>
      </ul>

      <button type="submit">Submit</button>
    </form>
  );
}
