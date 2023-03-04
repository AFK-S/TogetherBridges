import React from "react";
import BG from "../assests/charityBg.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
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
        className="w-full h-screen flex justify-center items-center flex-col"
        style={{ background: "rgb(0 0 0 / 48%)" }}
      >
        <h1 className="text-6xl font-bold text-center text-white uppercase">
          Together Bridges
        </h1>
        <div className="flex gap-4 mt-8">
          <Link
            to="/login"
            className="text-gray-900 bg-white focus:outline-none hover:bg-gray-400 font-medium rounded-lg px-5 py-2.5"
          >
            Login As NGO
          </Link>
          <Link
            to="/ngos"
            className="text-gray-900 bg-white focus:outline-none hover:bg-gray-400 font-medium rounded-lg px-5 py-2.5 mr-2"
          >
            Explore NGOs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
