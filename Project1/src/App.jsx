import React from "react";
import "./App.css";

function App() {
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
        <button>Login</button>
      </nav>
    </div>
  );
}

export default App;
