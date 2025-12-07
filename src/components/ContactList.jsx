import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const ContactList = () => {
  return (
    <div
      id="contact-list"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Contact Details"
        desc={
          "Reach out to us for collaboration, support, or any project inquiry—we’re here to help"
        }
      />

      <div className="contact-info w-full max-w-xl mx-auto text-center space-y-4 mt-4">
        <p className="text-lg font-medium">
          Email:{" "}
          <span className="font-semibold text-gray-700 dark:text-white">
            hello@novastack.com
          </span>
        </p>
        <p className="text-lg font-medium">
          Phone:{" "}
          <span className="font-semibold  text-gray-700 dark:text-white">
            (555) 123-4567
          </span>
        </p>

        <div className="flex justify-center items-center gap-5">
          <img className="cursor-pointer" src={assets.linkedin_icon} alt="" />
          <img className="cursor-pointer" src={assets.twitter_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactList;
