import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/StateContext";
import EventCard from "../components/EventCard";
import { useCookies } from "react-cookie";
import axios from "axios";

const Events = () => {
  const [tabCount, setTabCount] = useState(0);
  const [cookies] = useCookies(["user_id"]);
  const { setLoading, setAlert } = useContext(StateContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/events/${cookies.user_id}`);
        setEvents(data);
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

  const changeTab = (count) => {
    setTabCount(count);
  };

  return (
    <div className="ngo w-10/12 md:w-8/12 mx-auto py-0">
      <div className="tabs my-16">
        <ul className=" text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li className="w-full" onClick={() => changeTab(0)}>
            <a
              href="#"
              className={`inline-block w-full p-4 text-gray-700 rounded-l-lg focus:ring-4 focus:ring-blue-300  focus:outline-none dark:bg-gray-700 dark:text-white ${
                tabCount === 0 ? "active bg-gray-200  text-gray-900" : ""
              }`}
              aria-current="page"
            >
              Upcoming Events
            </a>
          </li>
          <li className="w-full" onClick={() => changeTab(1)}>
            <a
              href="#"
              className={`inline-block w-full p-4 text-gray-700 rounded-r-lg focus:ring-4 focus:ring-blue-300  focus:outline-none dark:bg-gray-700 dark:text-white ${
                tabCount === 1 ? "active bg-gray-200  text-gray-900" : ""
              }`}
            >
              Previous Events
            </a>
          </li>
        </ul>
        <div id="myTabContent" className="my-3">
          <div
            className={` ${
              tabCount === 0 ? "" : "hidden"
            } p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto  gap-10">
              {events.map((event) => {
                return <EventCard event={event} />;
              })}
            </div>
          </div>
          <div
            className={` ${
              tabCount === 1 ? "" : "hidden"
            } p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab`}
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto  gap-10">
              {events.map((event) => {
                return <EventCard event={event} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
