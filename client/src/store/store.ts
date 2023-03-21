import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./features/auth/authSlice";
import loadingSlice from "./features/loading/laodingSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export default store;
