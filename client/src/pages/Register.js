import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import "./Register.css"


const Register = () => {
  const initialInput = { first_name: "", last_name: "", email: "", password: "", cPassword: "", mobile_no: "", dob: "", gender: "" }
  const [inputFields, setInputFields] = useState(initialInput)
  const [password, setPassword] = useState(false)
  const [cPassword, setCpassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
      const { name, value } = e.target;
      setInputFields({ ...inputFields, [name]: value })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      var fname = inputFields.first_name
      var lname = inputFields.last_name
      var gender = inputFields.gender
      var dob = inputFields.dob
      var email = inputFields.email
      var password = inputFields.password
      var cPassword = inputFields.cPassword
      var mobile_no = inputFields.mobile_no

      if (validator.isEmpty(fname.trim()) === true || validator.isLength(fname, 3) === false) {
          alert("Enter valid First Name")
      } else if (validator.isEmpty(lname.trim()) === true || validator.isLength(lname, 3) === false) {
          alert("Enter valid Last Name")
      } else if (validator.isEmpty(gender) === true) {
          alert("Select Gender")
      } else if (validator.isDate(dob) === false) {
          alert("Enter valid Date of Birth")
      } else if (validator.isInt(mobile_no) === false) {
          alert("Enter valid Mobile Number")
      } else if (validator.isEmail(email) === false) {
          alert("Enter valid Email")
      } else if (validator.isStrongPassword(password) === false) {
          alert("Password must include atleast one uppercase, lowecase, number and symbols like [@ ! $ ? % &]")
      } else if (validator.equals(password, cPassword) === false) {
          console.log(validator.equals(password, cPassword));
          alert("Passwords do not match")
      } else {
          // setIsLoading(true);
          // axios.post(`${baseUrl}/api/signup/`, inputFields)
          //     .then((res) => {
          //         console.log(res);
          //         alert("Registered Successfully!")
          //         setIsLoading(false);
          //         setInputFields(initialInput)
          //         window.location.href = "/";
          //     })
          //     .catch((error) => {
          //         setIsLoading(false);
          //         console.log(error);
          //         if (error.response) {
          //             if (error.response.status === 406) {
          //                 alert("user aleady exist")
          //                 window.location.href = "/"
          //             } else {
          //                 alert("Something went wrong!")
          //             }
          //         }
          //     })
      }
  }

  const showPassword = () => {
      setPassword(!password)
  }
  const showCpassword = () => {
      setCpassword(!cPassword)
  }
  return (
    <div className="register container sm:px-4 max-w-full mx-auto p-6">
    <div className="container mx-auto sm:px-4">
        <form onSubmit={handleSubmit}>
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
                
                <div className="md:w-1/2 pr-4 pl-4 p-0 md:px-12">
                    <div className="flex flex-col input-fields">
                        <label>First Name</label>
                        <input onChange={handleChange} type="text" value={inputFields.first_name} name="first_name" />
                    </div>
                    <div className="flex flex-col input-fields">
                        <label>Last Name</label>
                        <input onChange={handleChange} type="text" value={inputFields.last_name} name="last_name" />
                    </div>


                    <div className="flex flex-col input-fields">
                        <label>Gender</label>
                        <div className="flex">
                            <div className="flex items-center">
                                <input onChange={handleChange} type="radio" name="gender" id="Male" value="male" />
                                <label>Male</label>
                            </div>
                            <div className="flex items-center ms-4">
                                <input onChange={handleChange} type="radio" name="gender" id="Female" value="female" />
                                <label>Female</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col input-fields">
                        <label>Date of Birth</label>
                        <input onChange={handleChange} type="date" value={inputFields.dob} name="dob" />
                    </div>

                </div>

                <div className="md:w-1/2 pr-4 pl-4 p-0 md:px-12">

                    <div className="flex flex-col input-fields">
                        <label>Mobile Number</label>
                        <input onChange={handleChange} type="number" value={inputFields.mobile_no} name="mobile_no" />
                    </div>

                    <div className="flex flex-col input-fields">
                        <label>Email ID</label>
                        <input onChange={handleChange} type="email" value={inputFields.email} name="email" />
                    </div>

                    <div className="flex flex-col input-fields relative">
                        <label>Password</label>
                        <input onChange={handleChange} type={password === true ? "text" : "password"} value={inputFields.password} name="password" />
                        {password === true ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="absolute right-4 top-[38px] h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={showPassword}
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
                    onClick={showPassword}
                  >
                    <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>
                  </svg>
                )}
                    </div>

                    <div className="flex flex-col input-fields relative">
                        <label>Confirm Password</label>
                        <input onChange={handleChange} type={cPassword === true ? "text" : "password"} value={inputFields.cPassword} name="cPassword" />
                        {cPassword === true ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="absolute right-4 top-[38px] h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={showCpassword}
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
                    onClick={showCpassword}
                  >
                    <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>
                  </svg>
                )}
                    </div>
                </div>
                <button className='mt-4 flex justify-center items-center'>
                    {isLoading === true ? <div className="spinner-border text-gray-100" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : "Register"}
                </button>
                <div className="register-btn w-full mt-3 text-center">
                    <p>You are already registered ? <span><Link to="/Login">Back to Login</Link> </span></p>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}

export default Register