import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
// import FloatingPhones from './components/FloatingPhones';
import GetStarted from './components/GetStarted';

const App = () => {
  return (
    <div>
      <Header />
      <Features />
      <HowItWorks />
      {/* <FloatingPhones/> */}
      <GetStarted />
    </div>
  );
};

export default App;
