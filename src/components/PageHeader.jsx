import React from "react";

const PageHeader = ({ title, subtitle, bg }) => {
  return (
    <div
      className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 mt-3 max-w-2xl mx-auto drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
