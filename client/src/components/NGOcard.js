import React from "react";
import "./NGOcard.css";
const ngolist = [
  {
    name: "NGO 1",
    address: "Address 1",
    phone: "1234567890",
    id: "1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque officiis assumenda! Esse quasi tenetur perspiciatis sint quas animi, aut ratione, blanditiis aperiam dicta unde nesciunt. Adipisci culpa dolores nihil?,",
  },
  {
    name: "NGO 2",
    address: "Address 2",
    phone: "1234567890",
    id: "2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque officiis assumenda! Esse quasi tenetur perspiciatis sint quas animi, aut ratione, blanditiis aperiam dicta unde nesciunt. Adipisci culpa dolores nihil?,",
  },
  {
    name: "NGO 3",
    address: "Address 3",
    phone: "1234567890",
    id: "3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque officiis assumenda! Esse quasi tenetur perspiciatis sint quas animi, aut ratione, blanditiis aperiam dicta unde nesciunt. Adipisci culpa dolores nihil?,",
  },
];

const NGOcard = () => {
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
