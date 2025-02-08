import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-[97%] h-[500px] m-auto mt-4 bg-black text-white rounded-lg flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl">Ideas and Action</h2>
        <h1 className="text-3xl font-semibold">Your Ideas, Our Execution</h1>
        <button className="bg-white text-black rounded-lg px-4 py-2 self-center">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
