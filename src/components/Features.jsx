import React from 'react';
import { FaCar, FaUserShield, FaBolt } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="bg-[#f0f8ff] p-8 md:p-20 rounded-lg text-center mx-4 md:mx-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#333]">What Makes Us the Perfect Choice For You</h2>
      <p className="text-gray-600 mb-8 md:mb-10">We heard what you need & we are here to serve you!</p>
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        <FeatureItem 
          icon={<FaCar />}
          title="P2P Ride Sharing"
          description="Unlike traditional cab services, Rydify lets you connect directly with fellow students and travelers to share rides."
        />
        <FeatureItem 
          icon={<FaUserShield />}
          title="Community Focused"
          description="Built by students for students—Rydify is tailored to your needs, offering flexible and safe travel options."
        />
        <FeatureItem 
          icon={<FaBolt />}
          title="Shared Cab Option"
          description="When you can’t find a driver, join forces with others to share an Uber or Lyft, reducing costs and carbon footprint."
        />
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8 md:mb-0">
    <div className="bg-[#0e7490] text-white p-4 md:p-6 rounded-full mb-4">
      {React.cloneElement(icon, { className: "text-3xl md:text-4xl" })}
    </div>
    <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#333]">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base">{description}</p>
  </div>
);

export default Features;
