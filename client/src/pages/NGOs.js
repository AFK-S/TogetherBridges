import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/StateContext";
import { Link } from "react-router-dom";
import axios from "axios";
import "./NGOs.css";

const NGOcard = () => {
  const [ngos, setNgos] = useState([]);
  const { setLoading } = useContext(StateContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/ngos");
        setNgos(data);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-20 gap-14 my-grid overflow-hidden">
      {ngos.map((ngo) => {
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
