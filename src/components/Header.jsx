import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
// Uncomment and use your actual logo path
// import logo from '../assets/logo.png'; 
// Uncomment and use your actual hero image path
// import heroImage from '../assets/hero-image.png';

const Header = () => {
  return (
    <header className="bg-white py-9 px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          {/* Centered Rydify logo and name */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#0e7490] rounded-full flex items-center justify-center mr-2">
              <FaMapMarkerAlt className="text-white" />
            </div>
            <span className="text-2xl font-bold text-[#0e7490]">Rydify</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Revolutionizing Ride-Sharing in United States
            </h1>
            <p className="text-gray-600 mb-6">
              Affordable, Sustainable and Community-Driven travel
            </p>
            <div className="flex items-center text-[#0e7490]">
              <FaMapMarkerAlt className="mr-2" />
              <span className="font-semibold">One Stop Ride Solution</span>
            </div>
          </div>
          
          <div className="w-1/2">
            {/* Replace with your actual hero image */}
            <div className="border-2 border-[#0e7490] rounded-lg p-4">
              <img 
                src="/path-to-your-hero-image.png" 
                alt="Ride-sharing illustration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
