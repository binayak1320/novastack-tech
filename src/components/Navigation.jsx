import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
const DarkLogo = () => {
  return (
    <span
      className="
    text-xl sm:text-2xl font-extrabold tracking-wide
    bg-linear-to-r from-[#0D743B] via-[#4CAF50] to-[#FCE166]
    text-transparent bg-clip-text
  "
    >
      NOVATECH TECHNOLOGIES
    </span>
  );
};

const LightLogo = () => {
  return (
    <span
      className="
    text-xl sm:text-2xl font-extrabold tracking-wide
    bg-linear-to-r from-[#FCE166] via-[#4CAF50] to-[#0D743B]
    text-transparent bg-clip-text drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]
  "
    >
      NOVATECH TECHNOLOGIES
    </span>
  );
};
const Navigation = ({ theme, setTheme }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
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

        <a
          onClick={() => setOpenSidebar(false)}
          href=""
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setOpenSidebar(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setOpenSidebar(false)}
          href=""
          className="sm:hover:border-b"
        >
          About
        </a>
        <a
          onClick={() => setOpenSidebar(false)}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact us
        </a>
        <a
          onClick={() => setOpenSidebar(false)}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our work
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          onClick={() => setOpenSidebar(true)}
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon }
          alt=""
          className="w-8 sm:hidden"
        />
        <a
          href="#contact-us"
          className="text-sm flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:scale-103 transition-all max-sm:hidden cursor-pointer"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
