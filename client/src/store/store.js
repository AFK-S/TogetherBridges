import { configureStore } from "@reduxjs/toolkit";
import { LoggedInSlice } from "./slice/IsLoggedInSlice";
import { NgoSlice } from "./slice/NgoSlice";

export const store = configureStore({
    reducer: {
        isLoggedIn: LoggedInSlice.reducer,
        NgoSlice: NgoSlice.reducer,
    }
})

export default store;