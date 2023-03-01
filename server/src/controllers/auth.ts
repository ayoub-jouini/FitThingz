import { Request, Response, NextFunction } from "express";
import bycrypt from "bcryptjs";

import { createToken, updateRefreshToken } from "../utils/token";

import Token from "../models/Token";
import User from "../models/User";
import HttpError from "../utils/HttpError";

interface UserRegister {
  nom: string;
  prenom: string;
  date_naiss: string;
  sexe: string;
  email: string;
  password: string;
  phone: number;
  lieu: string;
  type: string;
}

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  let token;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      const error = new HttpError("user does not exist.", 404);
      return next(error);
    }

    const hash = await bycrypt.compare(password, user.password);
    if (!hash) {
      const error = new HttpError("inccorect password.", 401);
      return next(error);
    }

    token = await createToken(user._id);
    if (!token) {
      const error = new HttpError("could not create token", 403);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not login." + err,
      500
    );
    return next(error);
  }

  res.json({
    token,
  });
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRegistre: UserRegister = req.body;

  let token;

  try {
    const existingUser = await User.findOne({
      email: userRegistre.email,
    }).exec();

    if (existingUser) {
      const error = new HttpError("user already exist.", 409);
      return next(error);
    }

    const user = await User.create(userRegistre);
    token = await createToken(user._id);
    if (!token) {
      const error = new HttpError("could not create token", 403);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save user.",
      500
    );
    return next(error);
  }
  res.json({ token });
};

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { refreshToken } = req.body;
  let accessToken;

  try {
    const existingToken = await Token.findOne({
      refreshToken,
    }).exec();

    if (!existingToken) {
      const error = new HttpError("user is not loged in.", 404);
      return next(error);
    }

    accessToken = await updateRefreshToken(existingToken);
    if (!accessToken) {
      const error = new HttpError("could not update token", 403);
      return next(error);
    }

    //@ts-ignore
    if (existingToken.refreshTokenTime < Date.now()) {
      await Token.deleteOne({ _id: existingToken._id }).exec();
      const error = new HttpError("Token has been expired.", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not refres token.",
      500
    );
    return next(error);
  }
  res.json({ accessToken });
};

export const logOut = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken } = req.body;

  try {
    await Token.deleteOne({ accessToken });
  } catch (err) {
    const error = new HttpError("Something went wrong, could not logout.", 500);
    return next(error);
  }

  res.json({ message: "logged out" });
};
