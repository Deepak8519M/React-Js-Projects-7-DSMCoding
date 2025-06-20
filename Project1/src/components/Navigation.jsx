import React from "react";

function Navigation() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="http://localhost:5174/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li>
            <a href="">Location</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button className="nav-btn">Login</button>
      </nav>
    </div>
  );
}

export default Navigation;
