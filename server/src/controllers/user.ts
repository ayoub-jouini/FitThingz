import { Request, Response, NextFunction } from "express";

import User, { IUser } from "../models/User";

import HttpError from "../utils/HttpError";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let users: IUser[];
  try {
    users = await User.find({});
    if (!users) {
      const error = new HttpError("there is no users", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find users." + err,
      500
    );

    return next(error);
  }

  let userArray: IUser[] = [];
  for (let i = 0; i < users.length; i++) {
    const singleUser: IUser = {
      _id: users[i]._id,
      nom: users[i].nom,
      prenom: users[i].prenom,
      date_naiss: users[i].date_naiss,
      sexe: users[i].sexe,
      email: users[i].email,
      phone: users[i].phone,
      avatar: users[i].avatar,
      lieu: users[i].lieu,
      type: users[i].type,
    };
    userArray.push(singleUser);
  }

  res.json({ users: userArray });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  let user: IUser;
  try {
    user = await User.findById(id);
    if (!user) {
      const error = new HttpError("there is no user", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find users." + err,
      500
    );

    return next(error);
  }

  res.json({ user });
};

export const getUsersByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const uploadAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      const error = new HttpError("user does not exist", 500);
      return next(error);
    }
    await user.remove();
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not remove user",
      500
    );
    return next(error);
  }

  res.status(201).json({ message: "user removed!" });
};
