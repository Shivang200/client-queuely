import React from "react";

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#121212] p-8 rounded-2xl shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">O</span>
          </div>
        </div>
        <h2 className="text-white text-center text-2xl font-semibold mb-4">Welcome Back</h2>
        <p className="text-gray-400 text-center mb-6">
          Don’t have an account yet? <span className="text-blue-500 cursor-pointer">Sign up</span>
        </p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none border border-gray-700 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none border border-gray-700 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Login
          </button>
        </form>
        <div className="text-center my-4 text-gray-500">OR</div>
        <div className="flex gap-4">
          <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-md"></button>
          <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-md">G</button>
          <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-md">X</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
