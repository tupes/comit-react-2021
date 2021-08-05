import React from "react";

export default function UserFormField(props) {
  const { label, value, type, name, required, handleChange } = props;

  return (
    <li>
      <label>
        {label}
        <input
          onChange={handleChange}
          defaultValue={value}
          type={type}
          name={name}
          required={required}
        />
      </label>
    </li>
  );
}
