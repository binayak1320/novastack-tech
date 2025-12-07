import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const MissionVision = () => {
  return (
    <div
      id="teams"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title={"Our Mission & Vision"}
        desc={"What drives us forward and shapes our journey."}
      />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Mission */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-10 shadow-lg border border-gray-200/60 dark:border-gray-700/40 hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/40">
              {/* <i className="ri-flag-fill text-blue-600 dark:text-blue-400 text-3xl"></i> */}
              <img
                src={assets.ads_icon}
                alt=""
                className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our Mission
            </h3>
          </div>

          <p className="text-medium leading-relaxed">
            To build meaningful, user-centered digital products that empower
            businesses to scale, innovate, and create lasting impact. We turn
            complex challenges into seamless experiences through creativity,
            collaboration, and cutting-edge technology.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-10 shadow-lg border border-gray-200/60 dark:border-gray-700/40 hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/40">
              <img
                src={assets.marketing_icon}
                alt=""
                className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our Vision
            </h3>
          </div>

          <p className="text-medium leading-relaxed">
            To become a global leader in digital transformation by building
            technology that inspires, connects, and creates opportunities for
            businesses and communities worldwide. We envision a future where
            innovation is accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
