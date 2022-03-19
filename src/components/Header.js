import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <img src="./images/head.jpg" alt="header" className="Head-img" />
      <div className="Head-Detail">
        <p>Let your curiosity do the booking</p>
        <button>I'm flexible</button>
      </div>
    </div>
  );
}

export default Header;
