import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setNGOs = createAsyncThunk("users/getUsers", async () => {
  const { data } = await axios.get("/api/ngos");
  return data;
});

const NGOSlice = createSlice({
  name: "NGOs",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(setNGOs.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
  reducers: {},
});

export default NGOSlice.reducer;
