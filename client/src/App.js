import { checkLogin } from "./store/slice/Others";
import EditProfile from "./pages/EditProfile";
import { setNGOs } from "./store/slice/NGOs";
import Register from "./pages/Register/NGO";
import Loading from "./components/Loading";
import Dashboard from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Landing from "./pages/Landing";
import Events from "./pages/Events";
import Login from "./pages/Login";
import NGOs from "./pages/NGOs";
import NGO from "./pages/NGO";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => state.Others)
  const [cookies] = useCookies(["user_id"]);

  useEffect(() => {
    dispatch(checkLogin(cookies.user_id ? true : false))
    dispatch(setNGOs());
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
