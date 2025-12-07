import React from "react";
import Teams from "../components/Teams";
import PageHeader from "../components/PageHeader";
import assets from "../assets/assets";
import WhoWeAre from "../components/WhoWeAre";
import MissionVision from "../components/MissionVission";
import CTAButton from "../components/CTAButton";

const About = () => {
  return (
    <>
      <PageHeader
        title="Connect With Us"
        subtitle="We're here to collaborate, support, and bring your ideas to life."
        bg={assets.bgImage1}
      />
      <Teams />
      <WhoWeAre />
      <MissionVision />
      <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <CTAButton href="/contact" label="Contact us" />
      </div>
    </>
  );
};

export default About;
