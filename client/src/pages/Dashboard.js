import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.UserSlice);

  return (
    <div className="ngo w-10/12 md:w-8/12 mx-auto py-10 md:py-16">
      <h1 className="font-semibold text-5xl">{`Hello ${user.name},`}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="my-10">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 mt-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://cdn-icons-png.flaticon.com/512/1/1247.png"
                alt="profile"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {user.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {user.location}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <NavLink
                  to="/editprofile"
                  className="inline-flex items-center px-4 py-2 text-sm
                  font-medium text-center text-white bg-blue-700 rounded-lg
                  hover:bg-blue-800 focus:ring-4 focus:outline-none
                  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                  dark:focus:ring-blue-800"
                >
                  Edit Profile
                </NavLink>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 f ocus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-5">
        <div className="w-full bg-gray-200 hover:bg-gray-300 cursor-pointer p-5 rounded-xl flex justify-center items-center ">
          <h1>Edit Upcoming events</h1>{" "}
          <i className="fa-solid fa-pen-to-square ml-3"></i>
        </div>
        <div className="w-full bg-gray-200 hover:bg-gray-300 cursor-pointer p-5 rounded-xl flex justify-center items-center">
          <h1>Edit Past events</h1>
          <i className="fa-solid fa-pen-to-square ml-3"></i>
        </div>
        <div className="w-full bg-gray-200 hover:bg-gray-300 cursor-pointer p-5 rounded-xl flex justify-center items-center">
          <h1>Edit Announcement</h1>
          <i className="fa-solid fa-pen-to-square ml-3"></i>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
