import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "auth",
  initialState: {
    token: "hi",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      console.log(state.token);
    },
  },
});
export const { setToken } = adminSlice.actions;
export default adminSlice.reducer;
