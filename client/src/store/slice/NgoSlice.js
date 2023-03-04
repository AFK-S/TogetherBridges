import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNgos = createAsyncThunk("/api/ngos", async () => {
  try {
    const { data } = await axios.get("/api/ngos");
    return data;
  } catch (error) {
    console.log(error);
  }
});

const NgoSlice = createSlice({
  name: "ngo",
  initialState: {
    ngos: [],
    loading: false,
  },
  extraReducers: {
    [fetchNgos.pending]: (state) => {
      state.loading = true;
    },
    [fetchNgos.fulfilled]: (state, action) => {
      state.loading = false;
      state.ngos = action.payload;
    },
    [fetchNgos.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export { NgoSlice };
// export const { setNgos } = NgoSlice.actions;
