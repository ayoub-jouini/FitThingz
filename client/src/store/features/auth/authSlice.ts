import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string | null;
  type: string | null;
  nom: string | null;
  prenom: string | null;
  avatar: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  accessTokenExpiresIn: string | null;
  RefreshTokenExpiresIn: string | null;
}

const initialState: User = {
  id: null,
  type: null,
  nom: null,
  prenom: null,
  avatar: null,
  accessToken: null,
  refreshToken: null,
  accessTokenExpiresIn: null,
  RefreshTokenExpiresIn: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials(state, action) {
      state.id = action.payload.id;
      state.nom = action.payload.nom;
      state.prenom = action.payload.prenom;
      state.avatar = action.payload.avatar;
      state.type = action.payload.type;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.accessTokenExpiresIn = action.payload.accessTokenExpiresIn;
      state.RefreshTokenExpiresIn = action.payload.RefreshTokenExpiresIn;
    },
    logOut(state) {
      state.id = null;
      state.nom = null;
      state.prenom = null;
      state.avatar = null;
      state.type = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.accessTokenExpiresIn = null;
      state.RefreshTokenExpiresIn = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
