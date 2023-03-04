import React from "react";
import "./NGOcard.css";
import { useSelector } from 'react-redux'
const NGOcard = () => {

  const ngolist = useSelector(state => state.NgoSlice)

  return (
    <div className="main-container">
      {ngolist.map((ngolist) => (
        <div className="card">
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
