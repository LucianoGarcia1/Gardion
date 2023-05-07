import React from "react";

export const Input = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};
