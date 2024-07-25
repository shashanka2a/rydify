import React from 'react';
import { FaCar, FaUserShield, FaBolt } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="bg-[#f0f8ff] p-20 rounded-lg text-center mx-4 md:mx-16">
      <h2 className="text-3xl font-bold mb-4 text-[#333]">What Makes Us the Perfect Choice For You</h2>
      <p className="text-gray-600 mb-10">We heard what you need & we are here to serve you!</p>
      
      <div className="flex flex-col md:flex-row justify-between items-start">
        <FeatureItem 
          icon={<FaCar />}
          title="Easy Booking"
          description="Book your ride with a few clicks only"
        />
        <FeatureItem 
          icon={<FaUserShield />}
          title="Verified Drivers"
          description="All drivers and cars are verified from our site"
        />
        <FeatureItem 
          icon={<FaBolt />}
          title="Flexible Options"
          description="Choose from a range of options that fits your need"
        />
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-6 md:mb-0">
    <div className="bg-[#0e7490] text-white p-6 rounded-full mb-4">
      {React.cloneElement(icon, { className: "text-4xl" })}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#333]">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default Features;
