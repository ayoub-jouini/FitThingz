import { authActions } from "./authSlice";

export const checkAuth = () => async (dispatch: any) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  if (accessToken) {
    dispatch(
      authActions.setCredentials({
        accessToken: JSON.parse(accessToken),
        refreshToken: refreshToken,
      })
    );
  }
};
