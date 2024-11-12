import React from "react";
import {
  FaUserTie,
  FaBriefcase,
  FaHandshake,
  FaRegLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-900 to-black text-white h-full">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to the Hiring Platform
        </h1>
        <p className="text-lg md:text-xl opacity-80 mb-8">
          Your one-stop platform for finding top talent and getting hired. Start
          your journey today!
        </p>
        <div className="flex space-x-6">
          {/* Get Started Button with Dashboard Link */}
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-violet-500 text-white font-semibold rounded-md shadow-lg hover:bg-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-500 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800 text-center">
        <h2 className="text-4xl font-semibold mb-10">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          <div className="bg-violet-600 p-6 rounded-lg shadow-lg hover:bg-violet-500 transition-all duration-300 transform hover:scale-105">
            <FaUserTie className="text-6xl mb-4 mx-auto text-white" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Find Top Talent
            </h3>
            <p className="text-white opacity-80">
              Connect with the best candidates for your organization and elevate
              your team.
            </p>
          </div>
          <div className="bg-violet-600 p-6 rounded-lg shadow-lg hover:bg-violet-500 transition-all duration-300 transform hover:scale-105">
            <FaBriefcase className="text-6xl mb-4 mx-auto text-white" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Create Job Listings
            </h3>
            <p className="text-white opacity-80">
              Post and manage job openings to attract the perfect candidates for
              your company.
            </p>
          </div>
          <div className="bg-violet-600 p-6 rounded-lg shadow-lg hover:bg-violet-500 transition-all duration-300 transform hover:scale-105">
            <FaHandshake className="text-6xl mb-4 mx-auto text-white" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Collaborate with Teams
            </h3>
            <p className="text-white opacity-80">
              Easily collaborate with your hiring team to make smarter hiring
              decisions.
            </p>
          </div>
          <div className="bg-violet-600 p-6 rounded-lg shadow-lg hover:bg-violet-500 transition-all duration-300 transform hover:scale-105">
            <FaRegLightbulb className="text-6xl mb-4 mx-auto text-white" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Innovative Tools
            </h3>
            <p className="text-white opacity-80">
              Leverage advanced features and analytics to streamline your hiring
              process.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-violet-600 py-8 text-center">
        <h2 className="text-2xl text-white font-semibold mb-4">
          Contact us at{" "}
          <a href="mailto:contact@gmail.com" className="underline">
            contact@gmail.com
          </a>
        </h2>
        <div className="mt-4">
          {/* Contact Button */}
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-violet-600 font-semibold rounded-md shadow-lg hover:bg-violet-100 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
