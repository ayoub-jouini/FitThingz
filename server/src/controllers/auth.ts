import { Request, Response, NextFunction } from "express";
import bycrypt from "bcryptjs";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";

import vars from "../configs/vars";
import transporter from "../configs/transporter";
import HttpError from "../utils/HttpError";

import User, { IUser } from "../models/User";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }
  let accessToken;
  let refreshToken;
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
    accessToken = Jwt.sign(
      {
        _id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
        type: user.type,
        emailConfirmed: user.emailConfirmed,
      },
      vars.accessSecret,
      { expiresIn: "1h" }
    );
    refreshToken = Jwt.sign(
      {
        _id: user._id,
      },
      vars.refreshSecret,
      { expiresIn: "1m" }
    );
    if (!accessToken || !refreshToken) {
      const error = new HttpError("could not create accessToken", 403);
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
    accessToken,
    refreshToken,
  });
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRegistre: IUser = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }
  let accessToken;
  let refreshToken;
  try {
    const existingUser = await User.findOne({
      email: userRegistre.email,
    }).exec();
    if (existingUser) {
      const error = new HttpError("user already exist.", 409);
      return next(error);
    }
    const user = await User.create(userRegistre);
    accessToken = Jwt.sign(
      {
        _id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
        type: user.type,
        emailConfirmed: user.emailConfirmed,
      },
      vars.accessSecret,
      { expiresIn: "1h" }
    );
    refreshToken = Jwt.sign(
      {
        _id: user._id,
      },
      vars.refreshSecret,
      { expiresIn: "1m" }
    );
    if (!accessToken || !refreshToken) {
      const error = new HttpError("could not create accessToken", 403);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save user." + err,
      500
    );
    return next(error);
  }
  res.json({ accessToken, refreshToken });
};

export const sendConfirmationToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email: string = req.body.email;
  try {
    const user: IUser = await User.findOne({ email });
    if (!user) {
      const error = new HttpError("could not find user", 404);
      return next(error);
    }
    const token = Jwt.sign({ email }, vars.emailSecret, { expiresIn: "1" });
    const mailOptions = {
      from: vars.email,
      to: email,
      subject: "Email Confirmation",
      html: `Click <a href="${vars.frontURL}/confirm-email/${token}">here</a> to confirm your email address.`,
    };
    await transporter.sendMail(mailOptions);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not send email." + err,
      500
    );
    return next(error);
  }
  res.json({ message: `Confirmation token sent to ${email}.` });
};

export const confirmEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.params.token;
  try {
    const decodedToken: any = Jwt.verify(token, vars.emailSecret);
    const email: string = decodedToken.email;
    const user: IUser = await User.findOneAndUpdate(
      { email },
      { emailConfirmed: true }
    );
    if (!user) {
      const error = new HttpError("could not find user", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not confirm email." + err,
      500
    );
    return next(error);
  }
  res.json({ message: "Email confirmed!" });
};

export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  try {
    const user: IUser = await User.findOne({ email });
    if (!user) {
      const error = new HttpError("User not found.", 404);
      return next(error);
    }
    const token = Jwt.sign({ _id: user._id }, vars.passwordSecret, {
      expiresIn: "1h",
    });
    const mailOptions = {
      to: user.email,
      subject: "Password Reset Request",
      text: `Click on the link to reset your password: ${vars.frontURL}/reset-password/${token}`,
    };
    await transporter.sendMail(mailOptions);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not send email." + err,
      500
    );
    return next(error);
  }
  res.json({ message: "Password reset email sent" });
};

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.params.token;
    const { password } = req.body;

    const decodedToken: any = Jwt.verify(token, vars.passwordSecret);

    const user: IUser = await User.findById(decodedToken._id);
    if (!user) {
      const error = new HttpError("User not found.", 404);
      return next(error);
    }
    await User.findByIdAndUpdate(user._id, { password });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update password." + err,
      500
    );
    return next(error);
  }
  res.status(200).json({ message: "Password reset successfully" });
};

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { refreshToken } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }
  let accessToken;
  try {
    const existingToken: any = Jwt.verify(refreshToken, vars.refreshSecret);
    if (!existingToken) {
      const error = new HttpError("user is not loged in.", 404);
      return next(error);
    }
    const user = await User.findById(existingToken._id);
    accessToken = Jwt.sign(
      {
        _id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
        type: user.type,
        emailConfirmed: user.emailConfirmed,
      },
      vars.accessSecret,
      { expiresIn: "1h" }
    );
    if (!accessToken) {
      const error = new HttpError("could not update token", 403);
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
