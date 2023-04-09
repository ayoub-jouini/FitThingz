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
