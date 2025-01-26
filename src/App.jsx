import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Client from "./Pages/Client";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div>
      <Home />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/client" element={<Client />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
