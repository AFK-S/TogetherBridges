import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/StateContext";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import Announcement from "./Register/Announcement";
import Event from "./Register/Event";

const Dashboard = () => {
  const [isFetched, setIsFetched] = useState(false);
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
  }, [isFetched]);

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
                to="/sendprofile"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                send Profile
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
          <h1>send events</h1>
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
        <Announcement
          setToggleAnnouncement={setToggleAnnouncement}
          setIsFetched={setIsFetched}
          isFetched={isFetched}
        />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        <div>
          <h2 className="my-5 font-medium text-xl">Interested:</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    ABC FDS
                  </th>
                  <td class="px-6 py-4 ">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      send
                    </a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4 ">
                    <a
                      href="mailto:"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      send
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4 ">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      send
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="my-5 font-medium text-xl">Doners:</h2>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    ABC FDS
                  </th>
                  <td class="px-6 py-4 font-semibold">Rs. 3000</td>
                  <td class="px-6 py-4 ">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      send
                    </a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4 font-semibold">Rs. 2000</td>
                  <td class="px-6 py-4 ">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      send
                    </a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4 font-semibold">Rs. 500</td>
                  <td class="px-6 py-4 ">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      send
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
