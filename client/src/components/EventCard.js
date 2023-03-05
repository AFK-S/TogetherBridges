import React from "react";

const EventCard = ({ event: { name, description, date, place } }) => {
  return (
    <div className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow max-w-lg hover:bg-gray-100 px-4 py-2.5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {name}
      </h5>
      <p className="mb-3 font-normal text-gray-700">{description}</p>
      <div className="flex justify-between w-full">
        <p className="mb-3 text-sm text-gray-700">{place}</p>
        <p className="mb-3 text-sm text-gray-700">
          {new Date(date).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
