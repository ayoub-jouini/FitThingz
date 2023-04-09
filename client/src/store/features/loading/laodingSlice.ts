import { createSlice } from "@reduxjs/toolkit";

interface User {
  loading: boolean | null;
  error: boolean | null;
  success: boolean | null;
}

const initialState: User = {
  loading: null,
  error: null,
  success: null,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    startloading(state) {
      state.loading = true;
    },
    finishLoaging(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.loading = action.payload.success;
    },
  },
});

export const LoadingActions = loadingSlice.actions;

export default loadingSlice;
