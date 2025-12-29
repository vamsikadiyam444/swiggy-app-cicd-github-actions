import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Import your existing components from src/compnents
import Header from "./src/compnents/Header";
import Body from "./src/compnents/Body";  // Using Body.js as your main menu page
import Cart from "./src/compnents/Cart";
import About from "./src/compnents/About";
import ContactUs from "./src/compnents/ContactUs";
import RestaurantMenu from "./src/compnents/RestaurantMenu";
import Error from "./src/compnents/Error";

function App() {
  return (
    <Router>
      <Header /> {/* Header is outside Routes so it shows on all pages */}
      <Routes>
        <Route path="/" element={<Body />} /> {/* Home / Menu page */}
        <Route path="/menu" element={<Body />} /> {/* Optional: alias for menu */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/resmenu/:resId" element={<RestaurantMenu />} />
        {/* Catch-all route for unmatched URLs */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

