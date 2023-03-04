import React from "react";
import BG from "../assests/charityBg.jpg";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-full h-screen flex justify-center items-center flex flex-col"
        style={{ background: "rgb(0 0 0 / 48%)" }}
      >
        <h1 className="text-5xl font-bold text-center text-white uppercase">
          Together Bridges
        </h1>
        <div className="flex mt-10">
          <NavLink to="/login">
            <button
              type="button"
              class="mr-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Login As NGO
            </button>
          </NavLink>
          <NavLink to="/ngo">
            <button
              type="button"
              class="mr-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Explore NGOs
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
