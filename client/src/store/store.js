import { configureStore } from "@reduxjs/toolkit";
import { LoggedInSlice } from "./slice/IsLoggedInSlice";
import { NgoSlice } from "./slice/NgoSlice";
import { UserSlice } from "./slice/UserSlice";

export const store = configureStore({
  reducer: {
    isLoggedIn: LoggedInSlice.reducer,
    NgoSlice: NgoSlice.reducer,
    UserSlice: UserSlice.reducer,
  },
});

export default store;
