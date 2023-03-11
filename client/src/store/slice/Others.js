import { createSlice } from "@reduxjs/toolkit";

const OthersSlice = createSlice({
  name: "others",
  initialState: {
    isLoading: false,
    Alert: {
      isAlert: false,
      message: "",
      type: "",
    },
  },
  reducers: {
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

export const { setLoading, setAlert } = OthersSlice.actions;
export default OthersSlice.reducer;
