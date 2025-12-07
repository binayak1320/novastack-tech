import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Partnership from "./components/Partnership";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  return (
    <Router>
      <div className="dark:bg-black relative">
        <Toaster />
        <Navigation theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         <Footer theme={theme}/>
        {/* <Hero />
      <Partnership />
      <Services />
      <Testimonial />
      <Teams />
      <ContactUs />
      */}
      </div>

    </Router>
  );
};

export default App;
