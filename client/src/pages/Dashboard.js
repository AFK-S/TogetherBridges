import { setDashboard } from "../store/slice/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import Announcement from "./Register/Announcement";
import { setIsLogin } from "../store/slice/Others";
import { NavLink } from "react-router-dom";
import Event from "./Register/Event";
import axios from "axios";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: dashboard } = useSelector((state) => state.Dashboard);

  const [isFetched, setIsFetched] = useState(false);
  const [toggleAnnouncement, setToggleAnnouncement] = useState(false);
  const [toggleEvent, setToggleEvent] = useState(false);

  const Logout = async () => {
    await axios.get("/api/logout");
    dispatch(setIsLogin(false));
  };

  useEffect(() => {
    dispatch(setDashboard());
  }, [isFetched]);

  return (
    <div className="ngo w-10/12 md:w-8/12 mx-auto py-10 md:py-16">
      <h1 className="font-semibold text-5xl">{`Hello ${dashboard.name},`}</h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 my-8">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow">
          <div className="flex flex-col items-center pb-10 mt-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://cdn-icons-png.flaticon.com/512/1/1247.png"
              alt="profile"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              {dashboard.name}
            </h5>
            <span className="text-sm text-gray-500">{dashboard.place}</span>
            <div className="flex mt-4 gap-4 space-x-3 md:mt-6">
              <NavLink
                to="/editprofile"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Edit Profile
              </NavLink>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={Logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl max-h-80 h-full bg-white border border-gray-200 rounded-xl shadow overflow-y-scroll">
          <h1 className="font-semibold shadow-sm text-xl mb-3 bg-white w-full px-5 py-3">
            Announcements
          </h1>
          <div className="px-5">
            {dashboard.announcements &&
              dashboard.announcements.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50"
                  >
                    {item.description}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-5">
        <div
          className="w-full bg-gray-200 hover:bg-gray-300 cursor-pointer p-5 rounded-xl flex justify-center items-center "
          onClick={() => setToggleEvent(true)}
        >
          <h1>Add event</h1> <i className="fa-solid fa-plus ml-3"></i>
        </div>
        <NavLink
          to="/events"
          className="w-full bg-gray-200 hover:bg-gray-300 cursor-pointer p-5 rounded-xl flex justify-center items-center"
        >
          <h1>View events</h1>
          <i className="fa-regular fa-eye ml-3"></i>
        </NavLink>
        <div
          className="w-full bg-gray-200 hover:bg-gray-300 cursor-pointer p-5 rounded-xl flex justify-center items-center"
          onClick={() => setToggleAnnouncement(true)}
        >
          <h1>Add Announcement</h1>
          <i className="fa-solid fa-plus ml-3"></i>
        </div>
      </div>
      {toggleEvent && <Event setToggleEvent={setToggleEvent} />}
      {toggleAnnouncement && (
        <Announcement
          setToggleAnnouncement={setToggleAnnouncement}
          setIsFetched={setIsFetched}
          isFetched={isFetched}
        />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        <div>
          <h2 className="my-5 font-medium text-xl">Interested Volunteer:</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {dashboard.volunteers &&
                  dashboard.volunteers.map((item) => {
                    return (
                      <tr
                        className="bg-white border-b hover:bg-gray-50"
                        key={item._id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {item.name}
                        </th>
                        <td className="px-6 py-4 ">
                          <a
                            href="#"
                            className="font-medium text-blue-600 hover:underline"
                          >
                            {item.email_address}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="my-5 font-medium text-xl">Doners:</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {dashboard.donates &&
                  dashboard.donates.map((item) => {
                    return (
                      <tr
                        className="bg-white border-b hover:bg-gray-50"
                        key={item._id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {item.name || "-"}
                        </th>
                        <td className="px-6 py-4 ">
                          <div className="font-medium text-blue-600">
                            {item.email_address || "-"}
                          </div>
                        </td>
                        <td className="px-6 py-4 ">
                          <span className="text-sm text-gray-500">
                            {`Rs. ${item.amount}`}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
