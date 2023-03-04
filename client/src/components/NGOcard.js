import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { fetchNgos, NgoSlice } from "../store/slice/NgoSlice";
import "./NGOcard.css";

const NGOcard = () => {
  const { ngos, loading } = useSelector((state) => state.NgoSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNgos());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-20 gap-14">
      {ngos.map((ngo) => (
        <Link to={`/ngo/${ngo._id}`} key={ngo._id}>
          <div className="card shadow-xl rounded-xl">
            <div className="ngoname">{ngo.name}</div>
            <div className="description">{ngo.description}</div>
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
      ))}
    </div>
  );
};

export default NGOcard;
