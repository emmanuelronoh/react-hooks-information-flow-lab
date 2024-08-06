// src/components/Header.js
import React from 'react';

const Header = () => (
  <header>
    <h1>My Application</h1>
    <button onClick={() => console.log('Button clicked!')}>Toggle</button>
  </header>
);

export default Header;
