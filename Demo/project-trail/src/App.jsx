import React from "react";
import "./index.css";
function App() {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="btn">
          <button>login</button>
        </div>
      </nav>
      <div className="hero">
        <div className="left">
          <div className="text">
            YOUR FEET
            <br />
            DESERVE <br /> THE BEST
          </div>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btns">
            <button className="redbtn">Shop Now</button>
            <button className="transpbtn">Category</button>
          </div>

          <p>Also Available On</p>
          <div className="icons">
            <img src="http://localhost:5173/images/amazon.png" alt="" />
            <img src="http://localhost:5173/images/flipkart.png" alt="" />
          </div>
        </div>
        <div className="right">
          <img src="http://localhost:5173/images/hero-image.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
