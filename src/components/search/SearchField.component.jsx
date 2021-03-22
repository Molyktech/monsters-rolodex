import React from "react";
import "./SearchField.styles.css";

export const SearchField = ({ placeholder, handleChange }) => {
  return (
    <input type="search" className="search" onChange={handleChange} placeholder={placeholder} />
  );
};
