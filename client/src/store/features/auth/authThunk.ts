import axios from "axios";
import { LoadingActions } from "../loading/laodingSlice";
import { authActions } from "./authSlice";

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch(LoadingActions.startloading());
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      dispatch(
        authActions.setCredentials({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        })
      );
      dispatch(LoadingActions.finishLoaging({ error: false, success: true }));
    } catch (err) {
      dispatch(LoadingActions.finishLoaging({ error: true, success: false }));
    }
  };
