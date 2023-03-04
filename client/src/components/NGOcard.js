import React from "react";
import "./NGOcard.css";
import { useSelector } from 'react-redux'
const NGOcard = () => {

  const ngolist = useSelector(state => state.NgoSlice)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-20 gap-14">
      {ngolist.map((ngolist) => (
        <div className="card shadow-xl rounded-xl">
          <div className="ngoname">{ngolist.name}</div>
          <div className="description">{ngolist.description}</div>
          <div className="contact-info">
            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="address">{ngolist.address}</div>
          </div>
          <div className="contact-info">
            <div className="icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="phonenumber">{ngolist.phone}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NGOcard;
