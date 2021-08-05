import React, { useState } from "react";

import UserForm from "../components/UserForm";
import UserFormField from "../components/UserFormField";

export default function LoginPage(props) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <UserForm
      formValues={formValues}
      setFormValues={setFormValues}
      handleSubmit={props.handleSubmit}
    >
      <UserFormField
        label="Email"
        value={formValues.email}
        name="email"
        type="email"
        required={true}
        handleChange={handleChange}
      />
      <UserFormField
        label="Password"
        value={formValues.password}
        name="password"
        type="password"
        required={true}
        handleChange={handleChange}
      />
    </UserForm>
  );
}
