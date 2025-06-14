import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css"; // Assuming you have some styles in App.css
import ContactHeader from "./Components/ContactHeader/ContactHeader";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
    </div>
  );
}

export default App;
