import React from "react";

function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          Also Available On
          <div className="brand-icons">
            <img
              src="http://localhost:5174/images/amazon.png"
              alt="amazon-logo"
            />
            <img
              src="http://localhost:5174/images/flipkart.png"
              alt="flipkart-logo"
            />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="http://localhost:5174/images/hero-image.png" alt="" />
      </div>
    </main>
  );
}

export default Hero;
