import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import About from "./components/About";
import NotFound from "./components/NotFound"; // Optional 404 page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        {/* Catch-all route for unmatched URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
