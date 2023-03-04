import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import EventCard from "../components/EventCard";
import Volunteer from "./Register/Volunteer";
import Donate from "./Register/Donate";

const Ngo = () => {
  const data = useSelector((state) => state.NgoSlice);
  const events = useSelector((state) => state.EventsSlice);
  const { ngo_id } = useParams();

  const [toggleVolunteer, setToggleVolunteer] = useState(false);
  const [toggleDonate, setToggleDonate] = useState(false);
  const [tabCount, setTabCount] = useState(0);

  const changeTab = (count) => {
    setTabCount(count);
  };

  const get_ngo = data.ngos.find((ngo) => ngo._id === ngo_id);

  return (
    <>
      <div className="ngo w-10/12 md:w-8/12 mx-auto py-10 md:py-16">
        <div className="flex my-5">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {get_ngo.place}
          </span>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="">
              <h1 className="font-semibold text-5xl">{` ${get_ngo.name}`}</h1>
              <a
                href={get_ngo.website_url}
                className="inline-flex items-center text-blue-600 hover:underline cursor-pointer mt-2"
                target="_blank"
              >
                Visit our website
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>
            </div>
            <div>
              <button
                onClick={() => setToggleVolunteer(true)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                I'm Interested
                <i className="fa-solid fa-plus ml-2"></i>
              </button>
              <button
                onClick={() => setToggleDonate(true)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Donate
                <i className="fa-solid fa-circle-dollar-to-slot ml-2"></i>
              </button>
            </div>
          </div>
          <p className="text-md text-gray-500 font-light mt-6">
            {get_ngo.about}
          </p>
          <div className="my-10">
            <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
            <div>
              <h1 className="font-semibold text-xl">Address</h1>
              <p className="text-md text-gray-500 font-light">
                {get_ngo.address}
              </p>
            </div>
            <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
          </div>
        </div>
        <div className="flex">
          <div className="icons flex flex-col">
            <div className="flex items-center my-3 text-md text-gray-500">
              <i className="fa-solid fa-phone mr-4 text-md"></i>
              <p>Tel:</p>
              <p className="ml-5">{get_ngo.phone_number}</p>
            </div>
            <div className="flex items-center my-3 text-md text-gray-500">
              <i className="fa-solid fa-envelope mr-4 text-md"></i>
              <p>Email:</p>
              <p className="ml-5">{get_ngo.email_address}</p>
            </div>
            <div className="flex items-center my-3 text-md text-gray-500">
              <i className="fa-solid fa-user mr-4 text-md"></i>
              <p>Incharge:</p>
              <p className="ml-5">{get_ngo.in_charge_name}</p>
            </div>
          </div>
        </div>
        <div className="tabs my-16">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mr-2" onClick={() => changeTab(0)}>
              <p
                className={` ${
                  tabCount === 0
                    ? "text-blue-600 bg-gray-100 rounded-t-lg active "
                    : ""
                } inline-block p-4  dark:bg-gray-800 dark:text-blue-500 cursor-pointer`}
              >
                Announcement
              </p>
            </li>
            <li className="mr-2" onClick={() => changeTab(1)}>
              <p
                className={` ${
                  tabCount === 1
                    ? "text-blue-600 bg-gray-100 rounded-t-lg active "
                    : ""
                } inline-block p-4  dark:bg-gray-800 dark:text-blue-500 cursor-pointer`}
              >
                Upcoming
              </p>
            </li>
            <li className="mr-2" onClick={() => changeTab(2)}>
              <p
                className={` ${
                  tabCount === 2
                    ? "text-blue-600 bg-gray-100 rounded-t-lg active "
                    : ""
                } inline-block p-4  dark:bg-gray-800 dark:text-blue-500 cursor-pointer`}
              >
                Previous
              </p>
            </li>
            <li className="mr-2" onClick={() => changeTab(3)}>
              <p
                className={` ${
                  tabCount === 3
                    ? "text-blue-600 bg-gray-100 rounded-t-lg active "
                    : ""
                } inline-block p-4  dark:bg-gray-800 dark:text-blue-500 cursor-pointer`}
              >
                Videos
              </p>
            </li>
          </ul>
          <div id="myTabContent" className="my-3">
            <div
              className={` ${
                tabCount === 0 ? "" : "hidden"
              } p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab`}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                htmlFor the next. The tab JavaScript swaps classNameees to
                control the content visibility and styling.
              </p>
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
                {events.upcoming.map((event) => {
                  const { name, description } = event;
                  return <EventCard name={name} description={description} />;
                })}
              </div>
            </div>
            <div
              className={` ${
                tabCount === 2 ? "" : "hidden"
              } p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab`}
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto  gap-10">
                {events.previous.map((event) => {
                  const { name, description } = event;
                  return <EventCard name={name} description={description} />;
                })}
              </div>
            </div>
            <div
              className={` ${
                tabCount === 3 ? "" : "hidden"
              } p-4 rounded-lg  dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab`}
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sCPREA5NFTU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {toggleVolunteer && <Volunteer setToggleVolunteer={setToggleVolunteer} />}
      {toggleDonate && <Donate setToggleDonate={setToggleDonate} />}
    </>
  );
};

export default Ngo;
