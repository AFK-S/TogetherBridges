import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [register, setRegister] = useState({
    name: "",
    email_address: "",
    phone_number: "",
    gender: "",
    interested_ngo: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/register/volunteer", register);
      console.log(data);
      setRegister({
        name: "",
        email_address: "",
        phone_number: "",
        gender: "",
        interested_ngo: "",
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="register container sm:px-4 max-w-full mx-auto p-6">
      <div className="container mx-auto sm:px-4">
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap items-center justify-center p-6 md:p-12">
            <div className="text-start w-full">
              <h3 className="flex items-center text-start mb-5 font-bold">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-9 h-9 mr-2"
                >
                  <path d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
                </svg>
                PyschHeal
              </h3>
            </div>
            <div className="w-full pr-4 pl-4 p-0 md:px-12">
              <div className="flex flex-col input-fields">
                <label>Name</label>
                <input
                  onChange={onChange}
                  type="text"
                  name="name"
                  value={register.name}
                  required
                />
              </div>
              <div className="flex flex-col input-fields">
                <label>Email Address</label>
                <input
                  onChange={onChange}
                  type="email"
                  name="email_address"
                  value={register.email_address}
                  required
                />
              </div>
              <div className="flex flex-col input-fields">
                <label>Phone Number</label>
                <input
                  onChange={onChange}
                  type="text"
                  value={register.phone_no}
                  name="phone_no"
                  required
                />
              </div>
              <div className="flex flex-col input-fields">
                <label>Gender</label>
                <div className="flex">
                  <div className="flex items-center">
                    <input
                      onChange={onChange}
                      type="radio"
                      name="gender"
                      value="male"
                      required
                    />
                    <label>Male</label>
                  </div>
                  <div className="flex items-center ml-4">
                    <input
                      onChange={onChange}
                      type="radio"
                      name="gender"
                      value="female"
                      required
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-4 flex justify-center items-center">
              {isLoading === true ? (
                <div className="spinner-border text-gray-100" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Register"
              )}
            </button>
            <div className="register-btn w-full mt-3 text-center">
              <p>
                You are already registered ?{" "}
                <span>
                  <Link to="/Login">Back to Login</Link>{" "}
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
