import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your existing components
import Header from "./src/compnents/Header";
import Body from "./src/compnents/Body";
import Cart from "./src/compnents/Cart";
import About from "./src/compnents/About";
import ContactUs from "./src/compnents/ContactUs";
import RestaurantMenu from "./src/compnents/RestaurantMenu";
import Error from "./src/compnents/Error";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/menu" element={<Body />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/resmenu/:resId" element={<RestaurantMenu />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;