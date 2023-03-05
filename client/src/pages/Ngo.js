import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/StateContext";
import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import Volunteer from "./Register/Volunteer";
import axios from "axios";
import Donate from "./Register/Donate";

const NGO = () => {
  const { ngo_id } = useParams();
  const { setLoading } = useContext(StateContext);

  const [ngo, setNgo] = useState({});
  const [announcement, setAnnouncement] = useState([]);
  const [events, setEvents] = useState([]);
  const [toggleVolunteer, setToggleVolunteer] = useState(false);
  const [toggleDonate, setToggleDonate] = useState(false);
  const [tabCount, setTabCount] = useState(0);

  const changeTab = (count) => {
    setTabCount(count);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/ngos/${ngo_id}`);
        setNgo(data);
        const { data: announcement } = await axios.get(
          `/api/announcements/${ngo_id}`
        );
        setAnnouncement(announcement);
        const { data: event } = await axios.get(`/api/events/${ngo_id}`);
        setEvents(event);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div className="ngo w-10/12 md:w-8/12 mx-auto pt-10 md:pt-16">
        <div className="flex my-5">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            {ngo.place}
          </span>
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold text-5xl">{` ${ngo.name}`}</h1>
              <a
                href={ngo.website_url}
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
            <div className="flex gap-4 justify-end items-center">
              <button
                onClick={() => setToggleVolunteer(true)}
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                I'm Interested
                <i className="fa-solid fa-plus ml-2"></i>
              </button>
              <button
                onClick={() => setToggleDonate(true)}
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Donate
                <i className="fa-solid fa-circle-dollar-to-slot ml-2"></i>
              </button>
            </div>
          </div>
          <p className="text-md text-gray-500 font-light mt-6">{ngo.about}</p>
          <div className="my-8">
            <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
            <div id="address">
              <h1 className="font-semibold text-xl">Address</h1>
              <p className="text-md text-gray-500 font-light">{ngo.address}</p>
            </div>
            <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
          </div>
        </div>
        <div className="flex">
          <div className="icons flex flex-col">
            <div className="flex items-center my-3 text-md text-gray-500">
              <i className="fa-solid fa-phone mr-4 text-md"></i>
              <p>Tel:</p>
              <p className="ml-5">{ngo.phone_number}</p>
            </div>
            <div className="flex items-center my-3 text-md text-gray-500">
              <i className="fa-solid fa-envelope mr-4 text-md"></i>
              <p>Email:</p>
              <p className="ml-5">{ngo.email_address}</p>
            </div>
            <div className="flex items-center my-3 text-md text-gray-500">
              <i className="fa-solid fa-user mr-4 text-md"></i>
              <p>Incharge:</p>
              <p className="ml-5">{ngo.in_charge_name}</p>
            </div>
          </div>
        </div>
        <div className="tabs my-16">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <li className="mr-2" onClick={() => changeTab(0)}>
              <p
                className={` ${
                  tabCount === 0
                    ? "text-blue-600 bg-gray-100 rounded-t-lg active "
                    : ""
                } inline-block p-4 cursor-pointer`}
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
                } inline-block p-4 cursor-pointer`}
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
                } inline-block p-4 cursor-pointer`}
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
                } inline-block p-4 cursor-pointer`}
              >
                Videos
              </p>
            </li>
          </ul>
          <div id="myTabContent" className="my-3">
            <div
              className={` ${
                tabCount === 0 ? "" : "hidden"
              } " id="profile" role="tabpanel" aria-labelledby="profile-tab`}
            >
              {announcement.map((ann) => {
                return (
                  <p className="my-5 rounded-lg bg-gray-50 dark:bg-gray-800 p-4 ">
                    <span className="font-semibold">{ann.description}</span>
                  </p>
                );
              })}
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
            <div
              className={` ${
                tabCount === 2 ? "" : "hidden"
              } p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab`}
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto  gap-10">
                {events.map((event) => {
                  const { name, description } = event;
                  return <EventCard event={event} />;
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

        <footer className=" bg-white rounded-lg py-5  md:px-6 md:py-8 dark:bg-gray-900">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href={`${ngo.website_url}`}
              className="flex items-center mb-4 sm:mb-0"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {ngo.name}
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href={`${ngo.instagram_url}`}
                  className={`mr-4 hover:underline md:mr-6 ${
                    ngo.instagram_url ? "" : "hidden"
                  }`}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`${ngo.facebook_url}`}
                  className={`mr-4 hover:underline md:mr-6 ${
                    ngo.facebook_url ? "" : "hidden"
                  }`}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={`${ngo.youtube_url}`}
                  className={`mr-4 hover:underline md:mr-6 ${
                    ngo.youtube_url ? "" : "hidden"
                  }`}
                >
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a href="https://localhost:3000" className="hover:underline">
              TogetherBridges™
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </div>
      {toggleVolunteer && <Volunteer setToggleVolunteer={setToggleVolunteer} />}
      {toggleDonate && <Donate setToggleDonate={setToggleDonate} />}
    </>
  );
};

export default NGO;
