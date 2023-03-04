import React from "react";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const user = useSelector((state) => state.UserSlice);

  return (
    <div className="ngo w-10/12 md:w-8/12 mx-auto py-10 md:py-16">
      <div className="flex my-5">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {user.location}
        </span>
      </div>

      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-5xl">{` ${user.name}`}</h1>
        </div>
        <p className="text-md text-gray-500 font-light mt-6">
          {user.description}
        </p>
        <div className="my-10">
          <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
          <div>
            <h1 className="font-semibold text-xl">Address</h1>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
              placeholder="Write your thoughts here..."
              value={user.address}
            ></textarea>
          </div>
          <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
        </div>
      </div>

      <div className="flex">
        <div className="icons flex flex-col ">
          <div className="flex items-center my-3 text-md text-gray-500">
            <i className="fa-solid fa-phone mr-4 text-md"></i>
            <p>Tel:</p>
            <input
              type="tel"
              name="phone"
              class=" ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Phone Number"
              value={user.phone}
              required
            />
          </div>
          <div className="flex items-center my-3 text-md text-gray-500">
            <i className="fa-solid fa-envelope mr-4 text-md"></i>
            <p>Email:</p>
            <input
              type="email"
              name="email"
              class=" ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Email Address"
              value={user.email}
              required
            />
          </div>
          <div className="flex items-center my-3 text-md text-gray-500">
            <i className="fa-solid fa-user mr-4 text-md"></i>
            <p>Incharge:</p>
            <input
              type="text"
              name="incharge"
              class=" ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Phone Number"
              value={user.incharge}
              required
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className=" mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProfile;
