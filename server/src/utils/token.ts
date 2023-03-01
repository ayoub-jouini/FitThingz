import crypto from "crypto";
import Token from "../models/Token";

export const generateRefreshToken = () => {
  const refreshToken = crypto.randomBytes(40).toString("hex");
  const refreshTokenTime = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
  return { refreshToken, refreshTokenTime };
};

export const generateAccessToken = () => {
  const accessToken = crypto.randomBytes(40).toString("hex");
  const accessTokenTime = new Date(Date.now() + 60 * 60 * 1000);
  return { accessToken, accessTokenTime };
};

export const createToken = async (id: any) => {
  const { accessToken, accessTokenTime } = generateAccessToken();
  const { refreshToken, refreshTokenTime } = generateRefreshToken();

  try {
    await Token.create({
      userId: id,
      accessToken,
      accessTokenTime,
      refreshToken,
      refreshTokenTime,
    });
  } catch (err) {
    return false;
  }

  return { accessToken, accessTokenTime, refreshToken, refreshTokenTime };
};

export const updateRefreshToken = async (token: any) => {
  const { accessToken, accessTokenTime } = generateAccessToken();

  token.accessToken = accessToken;
  token.accessTokenTime = accessTokenTime;

  try {
    await token.save();
  } catch (err) {
    return false;
  }

  return { accessToken, accessTokenTime };
};
