import React, { useState } from "react";

export default function UserForm(props) {
  const [error, setError] = useState(null);

  const { formValues, children } = props;

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
    <form className="user-form" onSubmit={handleSubmit}>
      <p>{error}</p>
      <ul>{children}</ul>

      <button type="submit">Submit</button>
    </form>
  );
}
