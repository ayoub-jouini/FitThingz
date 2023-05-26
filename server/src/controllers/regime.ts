import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import HttpError from "../utils/HttpError";
import { AuthReq } from "../middlewares/authorization";

import Regime, { IRegime } from "../models/Regime";
import Coach from "../models/Coach";

export const getAllRegimes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let regimes: IRegime[];
  try {
    regimes = await Regime.find({})
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!regimes) {
      const error = new HttpError("there is no regime", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find regime." + err,
      500
    );

    return next(error);
  }

  let regimeArray: IRegime[] = [];
  for (let i = 0; i < regimes.length; i++) {
    const singleregime: IRegime = {
      _id: regimes[i]._id,
      createur: regimes[i].createur,
      nom: regimes[i].nom,
      image: regimes[i].image,
      type: regimes[i].type,
      description: regimes[i].description,
      duree: regimes[i].duree,
      tags: regimes[i].tags,
      jours: regimes[i].jours,
    };
    regimeArray.push(singleregime);
  }

  res.json({ regime: regimeArray });
};

export const getRegimeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  let regime: IRegime;
  try {
    regime = await Regime.findById(id).populate("createur");
    if (!regime) {
      const error = new HttpError("there is no regime", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find regimes." + err,
      500
    );

    return next(error);
  }

  res.json({ regime });
};

// export const getRegimeByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const getRegimesByCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const createur: string = req.params.creator;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let regimes: IRegime[];
  try {
    regimes = await Regime.find({ createur })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!regimes) {
      const error = new HttpError("there is no regimes", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find regimes." + err,
      500
    );

    return next(error);
  }

  let regimeArray: IRegime[] = [];
  for (let i = 0; i < regimes.length; i++) {
    const singleregime: IRegime = {
      _id: regimes[i]._id,
      createur: regimes[i].createur,
      nom: regimes[i].nom,
      image: regimes[i].image,
      type: regimes[i].type,
      description: regimes[i].description,
      duree: regimes[i].duree,
      tags: regimes[i].tags,
      jours: regimes[i].jours,
    };
    regimeArray.push(singleregime);
  }

  res.json({ regimes: regimeArray });
};

export const getRegimesByType = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const type: string = req.params.type;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let regimes: IRegime[];
  try {
    regimes = await Regime.find({ type })
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!regimes) {
      const error = new HttpError("there is no regimes", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find regimes." + err,
      500
    );

    return next(error);
  }

  let regimeArray: IRegime[] = [];
  for (let i = 0; i < regimes.length; i++) {
    const singleregime: IRegime = {
      _id: regimes[i]._id,
      createur: regimes[i].createur,
      nom: regimes[i].nom,
      image: regimes[i].image,
      type: regimes[i].type,
      description: regimes[i].description,
      duree: regimes[i].duree,
      tags: regimes[i].tags,
      jours: regimes[i].jours,
    };
    regimeArray.push(singleregime);
  }

  res.json({ regimes: regimeArray });
};

export const getRegimesByTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let tags: string[];
  if (typeof req.query.tags === "string") tags = req.query.tags.split(",");

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let regimes: IRegime[];
  try {
    regimes = await Regime.find({ tags: { $all: tags } })
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!regimes) {
      const error = new HttpError("there is no regimes", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find regimes." + err,
      500
    );

    return next(error);
  }

  let regimeArray: IRegime[] = [];
  for (let i = 0; i < regimes.length; i++) {
    const singleregime: IRegime = {
      _id: regimes[i]._id,
      createur: regimes[i].createur,
      nom: regimes[i].nom,
      image: regimes[i].image,
      type: regimes[i].type,
      description: regimes[i].description,
      duree: regimes[i].duree,
      tags: regimes[i].tags,
      jours: regimes[i].jours,
    };
    regimeArray.push(singleregime);
  }

  res.json({ regimes: regimeArray });
};

export const getRepasByDay = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;

  const day: string = req.params.jour;

  let repas;
  try {
    const regime = await Regime.findById(id)
      .populate("createur")
      .populate("jours.repas.aliment");
    if (!regime) {
      const error = new HttpError("there is no regime", 404);
      return next(error);
    }

    repas = regime.jours.filter((jour) => jour.dayNumber.toString() === day);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find regimes." + err,
      500
    );

    return next(error);
  }

  res.json({ repas: repas[0].repas });
};

export const createRegime = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const regime = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  let jours = [];
  for (let i = 0; i < regime.duree; i++) {
    const jour = {
      dayNumber: i + 1,
    };
    jours.push(jour);
  }

  try {
    const existingCoach = await Coach.findOne({ user: req.userData._id });

    if (!existingCoach) {
      const error = new HttpError("there is no coach", 404);
      return next(error);
    }
    const createdregime = new Regime({
      createur: req.userData._id,
      nom: regime.nom,
      image: regime.image,
      type: regime.type,
      description: regime.description,
      duree: regime.duree,
      jours: jours,
      tags: regime.tags,
    });
    await createdregime.save();
    existingCoach.regime.push(createdregime._id);
    await existingCoach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save regime." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "created!" });
};

export const updateRepas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const jour: string = req.params.jour;
  const repas = req.body.repas;
  const errors = validationResult(req);
  console.log(repas);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }
  try {
    const regime = await Regime.findById(id);
    if (!regime) {
      const error = new HttpError("there is no regime", 404);
      return next(error);
    }
    for (let i = 0; i < regime.jours.length; i++) {
      if (regime.jours[i].dayNumber === Number(jour)) {
        regime.jours[i].repas = repas;
      }
    }
    regime.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find regimes." + err,
      500
    );
    return next(error);
  }
  res.json({ message: "added!", repas });
};

export const updateRegime = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const regime = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const existingRegime = await Regime.findById(id);
    if (!existingRegime) {
      const error = new HttpError("regime does not exist", 404);
      return next(error);
    }

    if (existingRegime.createur !== req.userData._id) {
      const error = new HttpError("you can't update this regime", 404);
      return next(error);
    }

    existingRegime.nom = regime.nom;
    existingRegime.nom = regime.nom;
    existingRegime.image = regime.image;
    existingRegime.type = regime.type;
    existingRegime.description = regime.description;
    existingRegime.duree = regime.duree;
    existingRegime.tags = regime.tags;

    await existingRegime.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save regime." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteRegime = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const regime = await Regime.findById(id);
    if (!regime) {
      const error = new HttpError("regime does not exist", 404);
      return next(error);
    }

    if (regime.createur !== req.userData._id) {
      const error = new HttpError("you can't delete this regime", 404);
      return next(error);
    }
    await regime.remove();
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not remove regime",
      500
    );
    return next(error);
  }

  res.status(201).json({ message: "regime removed!" });
};
