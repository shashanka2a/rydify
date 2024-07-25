import React from 'react';

const GetStarted = () => {
  return (
    <section className="py-16 px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between" style={{ background: 'linear-gradient(135deg, var(--Primary-900, #01222C) 30%, #2296B8 100%)' }}>
      <div className="max-w-md text-left text-white mb-8 md:mb-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 whitespace-nowrap">Ready to Get Started?</h2>
        <p className="mb-10 text-lg">
          Download the app now on your smart phone & enjoy a safe
          and pocket friendly journey with Radify!
        </p>
        <button className="px-8 py-3 bg-white text-[#0e3e5c] rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
          Download App
        </button>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-64 bg-white rounded-3xl overflow-hidden shadow-lg mx-auto md:mx-0">
          <div className="bg-[#0e3e5c] text-white p-2 text-xs">9:41</div>
          <img src="/path-to-app-screenshot-1.png" alt="App Screenshot 1" className="w-full" />
        </div>
        <div className="w-64 bg-white rounded-3xl overflow-hidden shadow-lg mx-auto md:mx-0">
          <div className="bg-[#0e3e5c] text-white p-2 text-xs">9:41</div>
          <img src="/path-to-app-screenshot-2.png" alt="App Screenshot 2" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
