import React from "react";
import ContactUs from "../components/ContactUs";
import ContactList from "../components/ContactList";
import assets from "../assets/assets";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Connect With Us"
        subtitle="We're here to collaborate, support, and bring your ideas to life."
        bg={assets.bgImage1}
      />
      <ContactUs />
      <ContactList />
    </>
  );
};

export default Contact;
