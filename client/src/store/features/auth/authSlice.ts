import { createSlice } from "@reduxjs/toolkit";

interface User {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: User = {
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logOut(state) {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
