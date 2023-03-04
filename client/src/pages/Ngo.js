import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Ngo = () => {
  const data = useSelector((state) => state.NgoSlice);

  const [tabCount, setTabCount] = useState(0);

  const changeTab = (count) => {
    setTabCount(count);
  };

  const params = useParams();

  return (
    <>
      <div className="ngo w-10/12 md:w-8/12 mx-auto py-10 md:py-16">
        <div className="flex my-5">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {data[params.id].place}
          </span>
        </div>

        <div>
          <div className="flex justify-between">
            <div className="">
              <h1 className="font-semibold text-5xl">{` ${
                data[params.id].name
              }`}</h1>
              <p
                href="#"
                class="inline-flex items-center text-blue-600 hover:underline cursor-pointer mt-2"
                onClick={() => {
                  window.open(data[params.id].website);
                }}
              >
                Visit our website
                <svg
                  class="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </p>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                I'm Interested
                <i className="fa-solid fa-plus ml-2"></i>
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Donate
                <i className="fa-solid fa-circle-dollar-to-slot ml-2"></i>
              </button>
            </div>
          </div>
          <p className="text-md text-gray-500 font-light mt-6">
            {data[params.id].description}
          </p>
          <div className="my-10">
            <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
            <div>
              <h1 className="font-semibold text-xl">Address</h1>
              <p className="text-md text-gray-500 font-light">
                {data[params.id].address}
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
              <p className="ml-5">123456789</p>
            </div>
            <div className="flex items-center my-3 text-md text-gray-500">
              <i className="fa-solid fa-envelope mr-4 text-md"></i>
              <p>Email:</p>
              <p className="ml-5">test@test.com</p>
            </div>
            <div className="flex items-center my-3 text-md text-gray-500">
              <i className="fa-solid fa-user mr-4 text-md"></i>
              <p>Incharge:</p>
              <p className="ml-5">Abc Xyz</p>
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
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
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
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
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
                <div
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </div>
                <div
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </div>
                <div
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </div>
                <div
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="/docs/images/blog/image-4.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ngo;
