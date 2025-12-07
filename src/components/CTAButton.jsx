import React from "react";
import assets from "../assets/assets";

const CTAButton = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-sm flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:scale-103 transition-all max-sm:hidden cursor-pointer"
    >
      {label} <img src={assets.arrow_icon} width={14} alt="" />
    </a>
  );
};

export default CTAButton;
