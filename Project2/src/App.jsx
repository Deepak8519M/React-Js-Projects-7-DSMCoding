import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css"; // Assuming you have some styles in App.css
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import ContactForm from "./Components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default App;
