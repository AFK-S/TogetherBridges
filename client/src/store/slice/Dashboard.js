import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setDashboard = createAsyncThunk("/api/dashboard", async () => {
  const { data } = await axios.get("/api/dashboard");
  return data;
});

const DashboardSlice = createSlice({
  name: "Dashboard",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(setDashboard.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
  reducers: {},
});

export default DashboardSlice.reducer;
