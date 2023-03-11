import React, { useState } from "react";

const EditProfile = () => {
  const [user, setUser] = useState({
    place: "",
    about: "",
    phone_number: "",
    email_address: "",
    in_charge_name: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="ngo w-10/12 md:w-8/12 mx-auto py-10 md:py-16">
      <div className="flex my-5">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium py-0.5 rounded ">
          <input
            type="tel"
            name="location"
            className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2"
            placeholder="Place"
            value={user.place}
            required
            onChange={onChange}
          />
        </span>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-5xl">{user.name}</h1>
        </div>
        <p className="text-md text-gray-500 font-light mt-6">
          {user.about}
        </p>
        <div className="my-10">
          <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
          <div>
            <h1 className="font-semibold text-xl">About</h1>
            <textarea
              name="address"
              onChange={onChange}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 mt-4"
              placeholder="Write your thoughts here..."
              value={user.about}
            ></textarea>
          </div>
          <div className="divider w-full bg-slate-200 h-0.5 my-3"></div>
        </div>
      </div>
      <div className="flex">
        <div className="icons flex flex-col ">
          <div className="flex items-center my-3 text-md text-gray-500">
            <i className="fa-solid fa-phone mr-4 text-md"></i>
            <p>Tel:</p>
            <input
              type="tel"
              name="phone_number"
              className=" ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Your Phone Number"
              value={user.phone_number}
              required
              onChange={onChange}
            />
          </div>
          <div className="flex items-center my-3 text-md text-gray-500">
            <i className="fa-solid fa-envelope mr-4 text-md"></i>
            <p>Email:</p>
            <input
              type="email"
              name="email_address"
              className=" ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Your Email Address"
              value={user.email_address}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex items-center my-3 text-md text-gray-500">
            <i className="fa-solid fa-user mr-4 text-md"></i>
            <p>Incharge Name:</p>
            <input
              type="text"
              name="in_charge_name"
              className=" ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Your Phone Number"
              value={user.in_charge_name}
              required
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className=" mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProfile;
