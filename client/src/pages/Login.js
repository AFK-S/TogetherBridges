import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slice/IsLoggedInSlice";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const loginBtn = () => {
    dispatch(login());
  };
  const initialInput = { email: "", password: "" };
  const [inputFields, setInputFields] = useState(initialInput);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = (e) => {
    
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login container mx-auto sm:px-4 max-w-full p-6">
      <div className="container mx-auto sm:px-0">
        <div className="flex flex-wrap ">
          <div className="sm:w-full pr-4 pl-4 md:w-1/2 flex items-center justify-center flex-col p-6 md:p-12">
            <form
              className="text-start flex flex-col w-full"
              onSubmit={handleSubmit}
            >
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
              <p className="font-medium mb-3 login-title welcome">
                Welcome Back!
              </p>
              <div className="flex flex-col mb-4">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={inputFields.email}
                />
              </div>
              <div className="flex flex-col relative">
                <label htmlFor="Password">Password</label>
                <input
                  type={showPassword === true ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  value={inputFields.password}
                />
                {showPassword === true ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="absolute right-4 top-[38px] h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={togglePassword}
                  >
                    <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="absolute right-4 top-[38px] h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={togglePassword}
                  >
                    <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>
                  </svg>
                )}
              </div>
              <p className="password-warning m-0">
                Password must include atleast one uppercase, lowecase, number
                and symbols like [@ ! $ ? % &]
              </p>
              <Link to="/reset_password" id="fpassword">
                Forgot password ?
              </Link>
              <button className="mt-5 flex justify-center items-center">
                {isLoading === true ? (
                  <div className="spinner-border text-gray-100" role="status">
                    <span clasName="visually-hidden"></span>
                  </div>
                ) : (
                  <>
                    Login
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 ml-1"
                    >
                      <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                    </svg>
                  </>
                )}
              </button>
            </form>
            <div className="register-btn w-full mt-3 text-center">
              <p>
                New to PyschHeal ?{" "}
                <span>
                  <Link to="/register">Register Here</Link>{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="vector-div hidden md:flex md:w-1/2 overflow-hidden">
            <img src="loginImg.jpg" alt="Be Happy" className='max-w-full h-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;