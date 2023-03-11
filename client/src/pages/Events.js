import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import { useSelector } from "react-redux";

const Events = () => {
  const { data: User } = useSelector((state) => state.Dashboard);

  const [tabCount, setTabCount] = useState(0);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(User.events || []);
  }, [User]);

  const changeTab = (count) => {
    setTabCount(count);
  };

  return (
    <div className="ngo w-10/12 md:w-8/12 mx-auto py-0">
      <div className="tabs my-16">
        <ul className=" text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex">
          <li className="w-full" onClick={() => changeTab(0)}>
            <a
              className={`inline-block w-full p-4 text-gray-700 rounded-l-lg focus:outline-none ${tabCount === 0 ? "active bg-gray-200  text-gray-900" : ""
                }`}
            >
              Upcoming Events
            </a>
          </li>
          <li className="w-full" onClick={() => changeTab(1)}>
            <a
              href="#"
              className={`inline-block w-full p-4 text-gray-700 rounded-r-lg  focus:outline-none ${tabCount === 1 ? "active bg-gray-200  text-gray-900" : ""
                }`}
            >
              Previous Events
            </a>
          </li>
        </ul>
        <div id="myTabContent" className="my-3">
          <div
            className={`${tabCount === 0 ? "" : "hidden"
              } p-4 rounded-lg bg-gray-50`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10">
              {events.map((event) => {
                const date = new Date();
                const today = date.toISOString().slice(0, 10);
                if (event.date.slice(0, 10) >= today) {
                  return <EventCard event={event} />;
                }
              })}
            </div>
          </div>
          <div
            className={` ${tabCount === 1 ? "" : "hidden"
              } p-4 rounded-lg bg-gray-50`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto  gap-10">
              {events.map((event) => {
                const date = new Date();
                const today = date.toISOString().slice(0, 10);
                if (event.date.slice(0, 10) < today) {
                  return <EventCard event={event} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
