import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Brand">
        <img src="./images/logo.png" alt="logo" className="Logo" />
        <p className="name">airbnb</p>
      </div>
      <div className="Search-Box">
        <input type="text" placeholder="Where you want to go ?" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="blue"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="red"
        class="bi bi-person-heart"
        viewBox="0 0 16 16"
      >
        <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
      </svg>
    </div>
  );
}

export default Navbar;
