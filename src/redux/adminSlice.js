import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});
export const { setToken } = adminSlice.actions;
export default adminSlice.reducer;
