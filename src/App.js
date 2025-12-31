import React from "react";
import { Routes, Route } from "react-router-dom";

// Components are in the components folder
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

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
