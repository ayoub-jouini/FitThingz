import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import HttpError from "../utils/HttpError";
import { AuthReq } from "../middlewares/authorization";

import Sportif, { ISportif } from "../models/Sportif";
import User from "../models/User";

export const getAllSportifs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let sportifs: ISportif[];
  try {
    sportifs = await Sportif.find({})
      .populate("user")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!sportifs) {
      const error = new HttpError("there is no sportifs", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find sportifs." + err,
      500
    );

    return next(error);
  }

  let sporifArray: ISportif[] = [];
  for (let i = 0; i < sportifs.length; i++) {
    const singlesporif: ISportif = {
      _id: sportifs[i]._id,
      user: sportifs[i].user,
      taille: sportifs[i].taille,
      poids: sportifs[i].poids,
      histo_bles: sportifs[i].histo_bles,
      allergies: sportifs[i].allergies,
      coach: sportifs[i].coach,
      salle: sportifs[i].salle,
      regime: sportifs[i].regime,
      programme: sportifs[i].programme,
    };
    sporifArray.push(singlesporif);
  }

  res.json({ sportifs: sporifArray });
};

export const getSportifById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  let sportif: ISportif;
  try {
    sportif = await Sportif.findById(id).populate("user").populate("programme");
    if (!sportif) {
      const error = new HttpError("there is no sportif", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find sportifs." + err,
      500
    );

    return next(error);
  }

  res.json({ sportif });
};

// export const getSportifByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const createSportif = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const sportif = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  if (req.userData.type !== "sportif") {
    const error = new HttpError("action denied", 409);
    return next(error);
  }

  try {
    const existingSportif = await Sportif.findOne({ user: req.userData });
    if (existingSportif) {
      const error = new HttpError("sportif already exist", 401);
      return next(error);
    }

    const createdSportif = new Sportif({
      user: req.userData._id,
      taille: sportif.taille,
      poids: sportif.poids,
      histo_bles: sportif.histo_bles,
      allergies: sportif.allergies,
    });
    await createdSportif.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save sportif." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "created!" });
};

export const updateSportif = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const sportif = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  if (req.userData.type !== "sportif") {
    const error = new HttpError("action denied", 409);
    return next(error);
  }

  try {
    const existingSportif = await Sportif.findOne({ user: req.userData._id });
    if (!existingSportif) {
      const error = new HttpError("sportif does not exist", 401);
      return next(error);
    }

    existingSportif.taille = sportif.taille;
    existingSportif.poids = sportif.poids;
    existingSportif.histo_bles = sportif.histo_bles;
    existingSportif.allergies = sportif.allergies;

    await existingSportif.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save sportif." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteSportif = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const sportif = await Sportif.findById(id);
    if (!sportif) {
      const error = new HttpError("sportif does not exist", 404);
      return next(error);
    }

    if (sportif.user !== req.userData._id || req.userData.type !== "admin") {
      const error = new HttpError("you can't delete this sportif", 404);
      return next(error);
    }

    const user = await User.findById(req.userData._id);

    user.type = "null";

    await sportif.remove();
    await user.save();
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not remove sportif",
      500
    );
    return next(error);
  }

  res.status(201).json({ message: "sportif removed!" });
};
