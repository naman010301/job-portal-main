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
          {/* Updated Get Started button with Dashboard Link */}
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-violet-500 text-white font-semibold rounded-md shadow-lg hover:bg-violet-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800 text-center">
        <h2 className="text-4xl font-semibold mb-10">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          <div className="bg-violet-600 p-6 rounded-lg shadow-lg hover:bg-violet-500 transition-all duration-300">
            <FaUserTie className="text-6xl mb-4 mx-auto text-white" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Find Top Talent
            </h3>
            <p className="text-white opacity-80">
              Connect with the best candidates for your organization and elevate
              your team.
            </p>
          </div>
          <div className="bg-violet-600 p-6 rounded-lg shadow-lg hover:bg-violet-500 transition-all duration-300">
            <FaBriefcase className="text-6xl mb-4 mx-auto text-white" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Create Job Listings
            </h3>
            <p className="text-white opacity-80">
              Post and manage job openings to attract the perfect candidates for
              your company.
            </p>
          </div>
          <div className="bg-violet-600 p-6 rounded-lg shadow-lg hover:bg-violet-500 transition-all duration-300">
            <FaHandshake className="text-6xl mb-4 mx-auto text-white" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Collaborate with Teams
            </h3>
            <p className="text-white opacity-80">
              Easily collaborate with your hiring team to make smarter hiring
              decisions.
            </p>
          </div>
          <div className="bg-violet-600 p-6 rounded-lg shadow-lg hover:bg-violet-500 transition-all duration-300">
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

      {/* Success Stories Section */}
      <div className="bg-gray-900 py-16">
        <h2 className="text-4xl font-semibold text-center text-white mb-8">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {/* Success Story Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Client 1"
              className="w-32 h-32 rounded-full mb-4 mx-auto object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-center text-violet-600">
              John Doe
            </h3>
            <p className="text-gray-700 text-center">
              "The platform helped me find the best candidate for the job
              quickly and efficiently!"
            </p>
          </div>

          {/* Success Story Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="Client 2"
              className="w-32 h-32 rounded-full mb-4 mx-auto object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-center text-violet-600">
              Jane Smith
            </h3>
            <p className="text-gray-700 text-center">
              "An amazing experience for both candidates and employers. Highly
              recommend!"
            </p>
          </div>

          {/* Success Story Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Client 3"
              className="w-32 h-32 rounded-full mb-4 mx-auto object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-center text-violet-600">
              Michael Johnson
            </h3>
            <p className="text-gray-700 text-center">
              "The interface is so intuitive, and I found exactly what I needed.
              Great service!"
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-violet-600 py-16 text-center">
        <h2 className="text-4xl text-white font-semibold mb-4">
          Ready to Find Your Perfect Candidate?
        </h2>
        <p className="text-lg text-white mb-8 opacity-80">
          Start today and take the first step towards building your dream team.
        </p>
        <Link
          to="/dashboard"
          className="px-8 py-4 bg-white text-violet-600 font-semibold rounded-md shadow-lg hover:bg-violet-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
