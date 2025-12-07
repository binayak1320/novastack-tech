import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import CTAButton from "./CTAButton";
import { DarkLogo, LightLogo } from "./Logo";

const Navigation = ({ theme, setTheme }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex px-4 sm:px-12 lg:px-24 xl:px-40 py-4 backdrop-blur-xl justify-between items-center sticky top-0 z-20 font-medium bg-white/50 dark:bg-gray-900/70">
      {theme === "dark" ? <DarkLogo /> : <LightLogo />}
      <div
        className={`text-gray-700 dark:text-white top-0 bottom-0 right-0 flex gap-5 transition-all sm:text-sm ${
          !openSidebar
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 sm:items-center`}
      >
        <img
          onClick={() => setOpenSidebar(false)}
          src={assets.close_icon}
          alt=""
          className="w-5 right-4 top-4 sm:hidden absolute"
        />
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            onClick={() => setOpenSidebar(false)}
            className="sm:hover:border-b"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          onClick={() => setOpenSidebar(true)}
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          className="w-8 sm:hidden"
        />
        <CTAButton href="#contact-us" label="Connect" />
      </div>
    </div>
  );
};

export default Navigation;
