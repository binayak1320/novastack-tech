import React from "react";
import assets from "../assets/assets";
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

const Footer = ({ theme }) => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          {theme === "dark" ? <DarkLogo /> : <LightLogo />}
          <p className="max-w-md">
            Shaping your ideas into impactful digital realities{" "}
          </p>

          <ul className="flex gap-8">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#testimonial">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news articles, and resources, sent to your inbox weekly
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button className="bg-primary text-white rounded px-6 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />
      {/* footer bottom */}
      <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright 2025 @ NOvaTech - All Right Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
