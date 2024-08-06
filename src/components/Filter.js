// src/components/Filter.js
import React from 'react';

const Filter = ({ options, onChange }) => (
  <select onChange={onChange}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Filter;
