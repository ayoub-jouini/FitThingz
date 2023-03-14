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

  res.json({
    user: {
      _id: user._id,
      nom: user.nom,
      prenom: user.prenom,
      date_naiss: user.date_naiss,
      sexe: user.sexe,
      email: user.email,
      phone: user.phone,
      avatar: user.avatar,
      lieu: user.lieu,
      type: user.type,
    },
  });
};

// export const getUsersByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const uploadAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) {
      const error = new HttpError("there is no user", 404);
      return next(error);
    }

    user.avatar = req.file.path;

    await user.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update users." + err,
      500
    );

    return next(error);
  }

  res.json({ message: "updated!" });
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const { nom, prenom, phone, lieu } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      const error = new HttpError("there is no user", 404);
      return next(error);
    }

    user.nom = nom;
    user.prenom = prenom;
    user.phone = phone;
    user.lieu = lieu;

    await user.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update users." + err,
      500
    );

    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deactivateAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;

  try {
    const user = await User.findByIdAndUpdate(id, { status: "inactive" });
    if (!user) {
      const error = new HttpError("there is no user", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not deactivate Account." + err,
      500
    );

    return next(error);
  }

  res.json({ message: "deactivated!" });
};

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
