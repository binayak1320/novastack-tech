import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services_data = [
    {
      title: "Web Development",
      description:
        "Custom, scalable, and high-performance web applications built with modern technologies.",
      icon: assets.ads_icon,
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile apps with seamless performance and intuitive UI/UX.",
      icon: assets.social_icon,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centric designs focused on usability, clarity, and delightful digital experiences.",
      icon: assets.marketing_icon,
    },
    {
      title: "Cloud Integration",
      description:
        "Reliable cloud architecture, deployment, and DevOps automation for smooth scaling.",
      icon: assets.content_icon,
    },
  ];
  return (
  <div id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
     <img src={assets.bgImage2} alt="" className="absolute -top-110 -left-70  -z-1 " />
     <Title title={'How can we help?'}desc={"From trategy to execution, we craft digital solutions that move your business forward."}/>
     <div className="flex flex-col md:grid grid-cols-2">
          {services_data.map((service, index)=>(
               <ServiceCard key={index} service={service} index={index} />
          ))}
     </div>
  </div>
  )
};

export default Services;
