import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // App.js is in the same folder (src/)
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <App />
    </Router>
);