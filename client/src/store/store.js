import { configureStore } from "@reduxjs/toolkit";
import { LoggedInSlice } from "./slice/IsLoggedInSlice";

export const store = configureStore({
    reducer: {
        isLoggedIn: LoggedInSlice.reducer,
    }
})

export default store;