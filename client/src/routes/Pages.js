import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Ngo from "../pages/Ngo";
import NGOcard from "../components/NGOcard";
import EditProfile from "../pages/EditProfile";
import Events from "../pages/Events";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Dashboard />} />
        <Route path="/ngo" index element={<NGOcard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ngo/:id" element={<Ngo />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route
          path="*"
          element={
            <h1 className="text-3xl font-bold text-center my-80">
              404 Not Found
            </h1>
          }
        />
      </Routes>
    </>
  );
};

export default Pages;
