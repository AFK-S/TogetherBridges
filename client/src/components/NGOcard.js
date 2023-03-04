import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNgos } from "../store/slice/NgoSlice";
import "./NGOcard.css";
import axios from "axios";

const NGOcard = () => {
  const { ngos, loading } = useSelector((state) => state.NgoSlice);
  const [ngo_list, setNgo] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNgos());
    (async () => {
      try {
        const { data } = await axios.get("/api/ngos");
        setNgo(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-20 gap-14">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {ngo_list.map((ngo) => {
            return (
              <Link to={`/ngo/${ngo._id}`} key={ngo._id}>
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
        </>
      )}
    </div>
  );
};

export default NGOcard;
