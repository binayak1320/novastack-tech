import React from "react";
import { Link } from "react-router-dom";

export const DarkLogo = () => {
  return (
    <Link to="/">
      <span
        className="
    text-xl sm:text-2xl font-extrabold tracking-wide
    bg-linear-to-r from-[#0D743B] via-[#4CAF50] to-[#FCE166]
    text-transparent bg-clip-text
  "
      >
        NOVATECH
      </span>
    </Link>
  );
};

export const LightLogo = () => {
  return (
    <Link to="/">
      <span
        className="
    text-xl sm:text-2xl font-extrabold tracking-wide
    bg-linear-to-r from-[#FCE166] via-[#4CAF50] to-[#0D743B]
    text-transparent bg-clip-text drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]
  "
      >
        NOVATECH
      </span>
    </Link>
  );
};