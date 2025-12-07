import React from "react";
import Title from "./Title";

const WhoWeAre = () => {
  return (
    <div
      id="teams"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
     <Title
        title={"Who we are"}
        desc={
          "Crafting human-centered digital experiences built for the future."
        }
      />

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-12 leading-relaxed text-medium space-y-6 border border-gray-200/60 dark:border-gray-700/50">
        <p>
          <strong className="text-gray-900 dark:text-white">
            NovaStack Technologies began with a simple belief —
          </strong>{" "}
          great digital experiences can transform businesses. What started as a
          small group of passionate engineers has grown into a full-scale
          innovation hub delivering modern, scalable, and impactful solutions
          for clients worldwide.
        </p>

        <p>
          We’re a team of thinkers, creators, and problem-solvers who love
          turning complex ideas into elegant, user-friendly digital products.
          From intuitive interfaces to powerful backend systems, every piece of
          what we build is crafted with precision and purpose.
        </p>

        <p>
          At our core, we value clarity, creativity, and collaboration. We
          listen closely, build thoughtfully, and execute with excellence —
          ensuring every project delivers real, measurable impact.
        </p>

        <p className="font-semibold text-gray-900 dark:text-white text-medium">
          This is who we are — a team driven by innovation, inspired by
          possibilities, and dedicated to building the future, one product at a
          time.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
