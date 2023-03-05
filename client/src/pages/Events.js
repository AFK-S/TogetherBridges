import React, { useState } from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/EventCard";

const Events = () => {
  const [tabCount, setTabCount] = useState(0);

  const changeTab = (count) => {
    setTabCount(count);
  };
  const events = useSelector((state) => state.EventsSlice);
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
              {events.upcoming.map((event) => {
                const { name, description,date } = event;
                return <EventCard name={name} description={description} date={date} />;
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
              {events.previous.map((event) => {
                const { name, description, date } = event;
                return <EventCard name={name} description={description} date={date} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
