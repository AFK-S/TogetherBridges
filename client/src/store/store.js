import { configureStore } from "@reduxjs/toolkit";
import { LoggedInSlice } from "./slice/IsLoggedInSlice";
import { UserSlice } from "./slice/UserSlice";
import Dashboard from "./slice/Dashboard";
import NGOs from "./slice/NGOs";
import Others from "./slice/Others";

export const store = configureStore({
  reducer: {
    isLoggedIn: LoggedInSlice.reducer,
    UserSlice: UserSlice.reducer,
    Dashboard,
    NGOs,
    Others,
  },
});

export default store;
