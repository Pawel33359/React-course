// Import react and react dom libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

// get reference to the div with id root
const el = document.getElementById("root");

// tell react to take control of that element
const root = ReactDOM.createRoot(el);

// show component on the screen
root.render(<App />);
