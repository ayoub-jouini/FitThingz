import { authActions } from "./authSlice";

export const checkAuth = () => async (dispatch: any) => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken) {
      dispatch(
        authActions.setCredentials({
          accessToken: accessToken,
          refreshToken: refreshToken,
        })
      );
    }
  }
};
