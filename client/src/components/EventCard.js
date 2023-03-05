import React from "react";

const EventCard = ({ name, description, date }) => {
  return (
    <div
      href="#"
      className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p classNmae="mb-3 font-normal text-gray-700">{date}</p>
      </div>
    </div>
  );
};

export default EventCard;
