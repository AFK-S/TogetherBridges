import Auth from "./routes/Auth";
import Pages from "./routes/Pages";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { login } from "./store/slice/IsLoggedInSlice";

function App() {
  const loginStatus = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const [cookies] = useCookies(["user_id"]);

  useEffect(() => {
    if (cookies.user_id) {
      console.log("cookies", cookies);
      dispatch(login());
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/ngo" element={<Ngo />} /> */}
          {/* <Route path="/ngo/:id" element={<Ngo />} /> */}
        </Routes>
        {loginStatus ? <Pages /> : <Auth />}
      </Router>
    </>
  );
}

export default App;
