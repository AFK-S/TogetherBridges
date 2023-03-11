import { configureStore } from "@reduxjs/toolkit";
import Dashboard from "./slice/Dashboard";
import Others from "./slice/Others";
import NGOs from "./slice/NGOs";

export const store = configureStore({
  reducer: {
    Dashboard,
    NGOs,
    Others,
  },
});

export default store;
