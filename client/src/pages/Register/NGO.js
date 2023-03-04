import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/IsLoggedInSlice";
import axios from "axios";

const NGO = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [register, setRegister] = useState({
    name: "",
    email_address: "",
    phone_number: "",
    in_charge_name: "",
    address: "",
    about: "",
    password: "",
    cPassword: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { password, cPassword } = register;
    if (password !== cPassword) {
      return alert("Password and Confirm Password must be same");
    }
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/register/ngo", register);
      console.log(data);
      setRegister({
        name: "",
        email_address: "",
        phone_number: "",
        in_charge_name: "",
        address: "",
        about: "",
        password: "",
        cPassword: "",
      });
      dispatch(login());
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className=" bg-[#909090] flex justify-center items-center px-4 h-screen">
      <div className="relative bg-white rounded-lg w-full h-full max-w-2xl md:h-auto shadow px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900">NGO Login</h3>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="input_label">NGO Name</label>
              <input
                type="text"
                name="name"
                className="input_field"
                placeholder="Helping Hands"
                onChange={onChange}
                value={register.name}
                required
              />
            </div>
            <div>
              <label className="input_label">Email Address</label>
              <input
                type="email"
                name="email_address"
                className="input_field"
                placeholder="name@gmail.com"
                onChange={onChange}
                value={register.email_address}
                required
              />
            </div>
            <div>
              <label className="input_label">Phone number</label>
              <input
                type="tel"
                name="phone_number"
                className="input_field"
                placeholder="1234567890"
                pattern="[0-9]{10}"
                onChange={onChange}
                value={register.phone_number}
                required
              />
            </div>
            <div>
              <label className="input_label">Incharge Name</label>
              <input
                type="text"
                name="in_charge_name"
                className="input_field"
                placeholder="John Doe"
                onChange={onChange}
                value={register.in_charge_name}
                required
              />
            </div>
          </div>
          <div>
            <label className="input_label">NGO Address</label>
            <input
              type="text"
              name="address"
              className="input_field"
              placeholder="1234 Main St."
              onChange={onChange}
              value={register.address}
              required
            />
          </div>
          <div>
            <label className="input_label">About NGO</label>
            <input
              type="text"
              name="about"
              className="input_field"
              onChange={onChange}
              value={register.about}
              required
            />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="relative">
              <label className="input_label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input_field"
                autoComplete="off"
                onChange={onChange}
                value={register.password}
                required
              />
              {showPassword ? (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="absolute right-4 top-[38px] h-5 w-5 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
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
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>
                </svg>
              )}
            </div>
            <div className="relative">
              <label className="input_label">Confirm password</label>
              <input
                type={showCPassword ? "text" : "password"}
                name="cPassword"
                className="input_field"
                placeholder="•••••••••"
                autoComplete="off"
                onChange={onChange}
                value={register.cPassword}
                required
              />
              {showCPassword ? (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="absolute right-4 top-[38px] h-5 w-5 text-gray-400 cursor-pointer"
                  onClick={() => setShowCPassword(!showCPassword)}
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
                  onClick={() => setShowCPassword(!showCPassword)}
                >
                  <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>
                </svg>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center"
          >
            {isLoading ? (
              <svg
                className="w-6 h-6 text-transparent animate-spin fill-white"
                viewBox="0 0 100 101"
                fill="none"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Register NGO"
            )}
          </button>
          <div className="text-sm text-center font-medium text-gray-500">
            Registered?{" "}
            <Link to="login" className="text-blue-700 hover:underline ">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NGO;
