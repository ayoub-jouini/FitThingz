import axios from "axios";
import { LoadingActions } from "../loading/laodingSlice";
import { authActions } from "./authSlice";

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch(LoadingActions.startloading());
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("id", response.data.id);
      localStorage.setItem("type", response.data.type);
      localStorage.setItem("nom", response.data.nom);
      localStorage.setItem("prenom", response.data.prenom);
      localStorage.setItem("avatar", response.data.avatar);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem(
        "accessTokenExpiresIn",
        response.data.accessTokenExpiresIn
      );
      localStorage.setItem(
        "RefreshTokenExpiresIn",
        response.data.RefreshTokenExpiresIn
      );
      dispatch(
        authActions.setCredentials({
          id: response.data.id,
          type: response.data.type,
          nom: response.data.nom,
          prenom: response.data.prenom,
          avatar: response.data.avatar,
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
          accessTokenExpiresIn: response.data.accessTokenExpiresIn,
          RefreshTokenExpiresIn: response.data.RefreshTokenExpiresIn,
        })
      );
      dispatch(LoadingActions.finishLoaging({ error: false, success: true }));
    } catch (err) {
      dispatch(LoadingActions.finishLoaging({ error: true, success: false }));
    }
  };

interface IRegistre {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  password: string;
  phone: string;
  adress: string;
  type: string;
}

export const registre = (data: IRegistre) => async (dispatch: any) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    email,
    password,
    phone,
    adress,
    type,
  } = data;

  try {
    dispatch(LoadingActions.startloading());
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/register`,
      {
        nom: firstName,
        prenom: lastName,
        date_naiss: dateOfBirth,
        sexe: gender,
        email: email,
        password: password,
        phone: phone,
        lieu: adress,
        type: type,
      }
    );

    localStorage.setItem("id", response.data.id);
    localStorage.setItem("type", response.data.type);
    localStorage.setItem("nom", response.data.nom);
    localStorage.setItem("prenom", response.data.prenom);
    localStorage.setItem("avatar", response.data.avatar);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    localStorage.setItem(
      "accessTokenExpiresIn",
      response.data.accessTokenExpiresIn
    );
    localStorage.setItem(
      "RefreshTokenExpiresIn",
      response.data.RefreshTokenExpiresIn
    );
    dispatch(
      authActions.setCredentials({
        id: response.data.id,
        type: response.data.type,
        nom: response.data.nom,
        prenom: response.data.prenom,
        avatar: response.data.avatar,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        accessTokenExpiresIn: response.data.accessTokenExpiresIn,
        RefreshTokenExpiresIn: response.data.RefreshTokenExpiresIn,
      })
    );
    dispatch(LoadingActions.finishLoaging({ error: false, success: true }));
  } catch (err) {
    dispatch(LoadingActions.finishLoaging({ error: true, success: false }));
  }
};

export const logout = () => async (dispatch: any) => {
  try {
    dispatch(LoadingActions.startloading());

    localStorage.removeItem("id");
    localStorage.removeItem("type");
    localStorage.removeItem("nom");
    localStorage.removeItem("prenom");
    localStorage.removeItem("avatar");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessTokenExpiresIn");
    localStorage.removeItem("RefreshTokenExpiresIn");
    dispatch(authActions.logOut());
    dispatch(LoadingActions.finishLoaging({ error: false, success: true }));
  } catch (err) {
    dispatch(LoadingActions.finishLoaging({ error: true, success: false }));
  }
};
