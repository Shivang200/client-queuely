import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
