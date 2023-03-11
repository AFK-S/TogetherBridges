import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { StateContext } from "./context/StateContext";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register/NGO";
import NGOs from "./pages/NGOs";
import NGO from "./pages/NGO";
import Events from "./pages/Events";
import EditProfile from "./pages/EditProfile";
import Loading from "./components/Loading";
import Alert from "./components/Alert";
import { useDispatch } from "react-redux";
import { setNGOs } from "./store/slice/NGOs";
import { setLoading, setAlert } from "./store/slice/Others";

function App() {
  const { isLogin } = useContext(StateContext);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      try {
        await dispatch(setNGOs());
      } catch (error) {
        setAlert({
          message: error.response.data.message,
          type: "error",
        });
      }
      dispatch(setLoading(false));
    })();
  }, []);
  return (
    <>
      <Router>
        {isLogin ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" index element={<Dashboard />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/register" element={<Navigate to="/" />} />
              <Route path="/ngos" element={<NGOs />} />
              <Route path="/ngos/:ngo_id" element={<NGO />} />
              <Route path="/events" element={<Events />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ngos" element={<NGOs />} />
            <Route path="/ngos/:ngo_id" element={<NGO />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Router>
      <Loading />
      <Alert />
    </>
  );
}

export default App;
