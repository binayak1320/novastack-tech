import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import ContactUs from "../components/ContactUs";
import Partnership from "../components/Partnership";

const Home = () => {
  return (
    <>
      <Hero />
      <Partnership />
      <Services />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Home;
