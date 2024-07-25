import React from 'react';
import { FaSearch, FaUserCheck, FaCar } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="py-16 flex justify-between items-center max-w-6xl mx-auto">
      <div className="w-1/2 pr-8">
        <h2 className="text-3xl font-bold mb-4 text-left">Wondering How Rydify Works?</h2>
        <p className="text-gray-600 mb-8 text-left">Let us walk you through that!</p>
        
        <div className="space-y-6 text-left">
          <Step 
            icon={<FaSearch className="text-[#0e7490]" />}
            title="Search for Ride"
            description="Enter your travel details and find available rides"
          />
          <Step 
            icon={<FaUserCheck className="text-[#0e7490]" />}
            title="Choose a Driver"
            description="Select from various drivers that fits your schedule"
          />
          <Step 
            icon={<FaCar className="text-[#0e7490]" />}
            title="Book & Travel"
            description="Confirm your booking and enjoy a smooth journey"
          />
        </div>
      </div>
      
      <div className="w-1/2">
        <img 
          src="/path-to-your-illustration.png" 
          alt="Rydify illustration" 
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

const Step = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

export default HowItWorks;