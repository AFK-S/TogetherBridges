import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/register" element={<Navigate to="/" />} />
        <Route path="/ngo" element={<NGOcard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ngo/:ngo_id" element={<Ngo />} />
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
