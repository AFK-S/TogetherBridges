import React from "react";
import { Link } from "react-router-dom";
import "./NGOs.css";
import { useSelector } from "react-redux";

const NGOcard = () => {
  const { data: NGOs } = useSelector((state) => state.NGOs);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-20 gap-14 my-grid overflow-hidden">
      {NGOs.map((ngo) => {
        return (
          <Link to={`/ngos/${ngo._id}`} key={ngo._id}>
            <div className="card shadow-xl rounded-xl">
              <div className="ngoname">{ngo.name}</div>
              <div className="description">{ngo.about}</div>
              <div className="contact-info">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="address">{ngo.address}</div>
              </div>
              <div className="contact-info">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="phonenumber">{ngo.phone_number}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NGOcard;
