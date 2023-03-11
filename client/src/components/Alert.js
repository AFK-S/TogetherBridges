import { setAlert } from "../store/slice/Others";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Alert = () => {
  const dispatch = useDispatch();

  const { Alert: alert } = useSelector((state) => state.Others);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setAlert({ isAlert: false, type: "", message: "" }));
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    alert.isAlert && (
      <div
        className={`z-50 fixed bottom-4 left-4 flex p-4 text-sm ${
          alert.type === "error" ? "text-red-800" : "text-green-800"
        } border ${
          alert.type === "error" ? "border-red-300" : "border-green-300"
        } rounded-lg bg-red-50`}
      >
        <div>{alert.message}</div>
      </div>
    )
  );
};

export default Alert;
