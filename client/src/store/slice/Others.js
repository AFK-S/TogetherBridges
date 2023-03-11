import { createSlice } from "@reduxjs/toolkit";

const OthersSlice = createSlice({
  name: "others",
  initialState: {
    isLogin: false,
    isLoading: false,
    Alert: {
      isAlert: false,
      message: "",
      type: "",
    },
  },
  reducers: {
    checkLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAlert: (state, action) => {
      state.Alert = {
        isAlert: action.payload.isAlert,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
  },
});

export const { checkLogin, setIsLogin, setLoading, setAlert } = OthersSlice.actions;
export default OthersSlice.reducer;
