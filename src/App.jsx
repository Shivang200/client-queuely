import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent py-4 flex justify-center fixed top-0 left-0 z-50 mix-blend-luminosity">
      <div className="w-[95%] max-w-[1200px] flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Queuely</h1>
        <button className="px-4 py-2 bg-gray-100 text-black rounded-full hover:bg-teal-400">
          GettingStarted
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="w-full flex justify-center pt-24 pb-16 bg-cover bg-center" >
      <div className="w-[95%] max-w-[1200px] bg-white bg-opacity-100 text-teal-800 rounded-3xl p-20 flex flex-col md:flex-row items-center text-center md:text-left  relative overflow-hidden h-auto md:h-[650px] justify-center gap-8">
        <div className="flex-1 flex flex-col justify-start items-start"> {/* Updated Flex settings */}
          <h2 className="text-lg md:text-2xl font-medium text-teal-600">Queue Less, Do More</h2>
          <h1 className="text-xl md:text-5xl font-bold mt-2 mb-3  leading-tight">
          Say goodbye to long waits, say hello to Queuely
          </h1>
          <button className="bg-teal-400 text-white px-8 py-3 rounded-full mt-6 text-lg font-semibold shadow-lg hover:bg-teal-300 transition">
            start
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/bg.jpg" alt="Your Hero Image Description" className="max-w-full h-auto rounded-lg " />
        </div>
      </div>
    </div>
  );
};


const Features = () => {
  return (
    <div className="w-full flex justify-center py-20 bg-cover bg-center" >
      <div className="w-[95%] max-w-[1200px] grid md:grid-cols-2 gap-8 text-white">
        <div>
          <h2 className="text-3xl font-bold text-teal-500">What does Queuely do?</h2>
          <p className="mt-4 text-gray-300">
          Queuely helps businesses manage queues efficiently, reducing wait times and improving customer experience with smart scheduling and real-time updates.
          </p>
          <button className="bg-teal-400 text-white px-6 py-2 rounded-full mt-6 hover:bg-teal-300">
            Let’s be in touch!
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-teal-800">Book Anytime, Anywhere</h3>
            <p className="text-sm text-black ">
            Skip the hassle of visiting in person—schedule your appointment online in seconds.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-teal-800"> No More Long Waits</h3>
            <p className="text-sm text-black ">
            Arrive just in time with automated reminders and updates.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-teal-800"> Skip the Crowds</h3>
            <p className="text-sm text-black ">
            No more waiting in packed clinics—book online and arrive just in time.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-teal-800">Minimize Missed Appointments</h3>
            <p className="text-sm text-black ">
            Timely reminders help ensure every slot is utilized efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-16 text-center">
      <h3 className="text-lg text-teal-900">Ready to elevate</h3>
      <h2 className="text-2xl font-bold">your digital experience?</h2>
      <button className="bg-teal-950 text-white px-8 py-3 rounded-full mt-6 text-lg font-semibold shadow-md hover:bg-teal-800 transition">
        contactus
      </button>
    </footer>
  );
};

const LandingPage = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
