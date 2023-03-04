import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register/NGO";
import Ngo from "../pages/Ngo";
import NGOcard from "../components/NGOcard";
import LandingPage from "../pages/LandingPage";

const Auth = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ngo/registration" element={<Register />} />
      <Route path="/ngo" element={<NGOcard />} />
      <Route path="/ngo/:id" element={<Ngo />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Auth;
