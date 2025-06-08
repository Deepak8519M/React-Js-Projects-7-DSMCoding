import React, { useState } from "react";
import "./index.css";
function App() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  return (
    <div className="hero">
      <h1>Dice Game</h1>
      <button onClick={() => setClicked(!clicked)}>Click</button>
      {clicked ? (
        <div className="full">
          Hello
        </div>
      ) : (
        <div className="box">Bye</div>
      )}
    </div>
  );
}

export default App;
