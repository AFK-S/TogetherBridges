import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserInfo = createAsyncThunk("/api/ngos", async (ngo_id) => {
  try {
    const { data } = await axios.get(`/api/ngos/${ngo_id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
  },
  extraReducers: {
    [getUserInfo.pending]: (state) => {
      state.loading = true;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [getUserInfo.rejected]: (state) => {
      state.loading = false;
    },
  },
  reducers: {
    setUser: (state, action) => {
      state = { ...state, [action.payload.name]: action.payload.value };
      return state;
    },
    updateProfile: (state) => {
      console.log(state);
      alert("Profile Updated");
      return state;
    },
  },
});

export { UserSlice };
export const { setUser, updateProfile } = UserSlice.actions;
