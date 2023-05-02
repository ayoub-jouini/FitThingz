import axios from "axios";
import { authActions } from "./authSlice";
import { logout } from "./authThunk";

export const requestAccessToken = async (refreshToken: string) => {
  console.log(refreshToken);
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/refreshToken`,
    {
      refreshToken,
    }
  );

  return {
    accessToken: response.data.accessToken,
    accessTokenExpiresIn: response.data.accessTokenExpiresIn,
  };
};

export const checkAuth = () => async (dispatch: any) => {
  if (typeof window !== "undefined") {
    let id: string | null = localStorage.getItem("id");
    let type: string | null = localStorage.getItem("type");
    let nom: string | null = localStorage.getItem("nom");
    let prenom: string | null = localStorage.getItem("prenom");
    let avatar: string | null = localStorage.getItem("avatar");
    let accessToken: string | null = localStorage.getItem("accessToken");
    let refreshToken: string | null = localStorage.getItem("refreshToken");
    let accessTokenExpiresIn: string | Date | null = localStorage.getItem(
      "accessTokenExpiresIn"
    );
    let RefreshTokenExpiresIn: string | Date | null = localStorage.getItem(
      "RefreshTokenExpiresIn"
    );
    console.log(RefreshTokenExpiresIn);
    if (
      !nom ||
      !prenom ||
      !avatar ||
      !refreshToken ||
      !type ||
      !accessToken ||
      !refreshToken ||
      !accessTokenExpiresIn ||
      !RefreshTokenExpiresIn
    ) {
      dispatch(logout());
      return false;
    }

    const currentDate = new Date();

    const RefreshTokenExpiresInDate = new Date(RefreshTokenExpiresIn);
    if (RefreshTokenExpiresInDate < currentDate) {
      dispatch(logout());
      return false;
    }

    const accessTokenExpiresInDate = new Date(accessTokenExpiresIn);
    if (accessTokenExpiresInDate < currentDate) {
      const newAccessToken = await requestAccessToken(refreshToken);
      accessToken = newAccessToken.accessToken;
      accessTokenExpiresIn = newAccessToken.accessTokenExpiresIn;
    }

    dispatch(
      authActions.setCredentials({
        id,
        type,
        nom,
        prenom,
        avatar,
        accessToken,
        refreshToken,
        accessTokenExpiresIn,
        RefreshTokenExpiresIn,
      })
    );
  }
};
