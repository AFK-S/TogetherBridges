import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/StateContext";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import Announcement from "./Register/Announcement";
import Event from "./Register/Event";

const Dashboard = () => {
  const [ngo, setNgo] = useState({});
  const [announcement, setAnnouncement] = useState([]);
  const [cookies] = useCookies(["user_id"]);
  const [toggleAnnouncement, setToggleAnnouncement] = useState(false);
  const [toggleEvent, setToggleEvent] = useState(false);

  const { setLoading, setIsLogin, setAlert } = useContext(StateContext);

  const Logout = async () => {
    await axios.get("/api/logout");
    setIsLogin(false);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data: ngo } = await axios.get(`/api/ngos/${cookies.user_id}`);
        setNgo(ngo);
        const { data: announcement } = await axios.get(
          `/api/announcements/${cookies.user_id}`
        );
        setAnnouncement(announcement);
      } catch (error) {
        console.log(error);
        setAlert({
          isAlert: true,
          type: error.response.data.type,
          message: error.response.data.message,
        });
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className="ngo w-10/12 md:w-8/12 mx-auto py-10 md:py-16">
      <h1 className="font-semibold text-5xl">{`Hello ${ngo.name},`}</h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 my-8">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow">
          <div className="flex flex-col items-center pb-10 mt-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://cdn-icons-png.flaticon.com/512/1/1247.png"
              alt="profile"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              {ngo.name}
            </h5>
            <span className="text-sm text-gray-500">{ngo.place}</span>
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
            {announcement.map((item) => {
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
          <h1>Edit events</h1>
          <i className="fa-solid fa-pen-to-square ml-3"></i>
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
        <Announcement setToggleAnnouncement={setToggleAnnouncement} />
      )}
    </div>
  );
};

export default Dashboard;
