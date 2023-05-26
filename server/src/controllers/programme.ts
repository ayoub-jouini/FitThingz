import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ObjectId } from "mongodb";

import HttpError from "../utils/HttpError";
import { AuthReq } from "../middlewares/authorization";

import Programme, { IProgramme } from "../models/Programme";
import Exercice, { IExercice } from "../models/Exercice";
import Coach from "../models/Coach";

export const getAllProgrammes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let programmes: IProgramme[];
  try {
    programmes = await Programme.find({})
      .skip((page - 1) * limit)
      .limit(limit);
    if (!programmes) {
      const error = new HttpError("there is no programmes", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find programmes." + err,
      500
    );

    return next(error);
  }

  let programmesArray: IProgramme[] = [];
  for (let i = 0; i < programmes.length; i++) {
    const singleProgramme: IProgramme = {
      _id: programmes[i]._id,
      createur: programmes[i].createur,
      nom: programmes[i].nom,
      type: programmes[i].type,
      description: programmes[i].description,
      jours: programmes[i].jours,
      duree: programmes[i].duree,
      image: programmes[i].image,
      tags: programmes[i].tags,
    };
    programmesArray.push(singleProgramme);
  }

  res.json({ programmes: programmesArray });
};

export const getProgrammeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  let programme: IProgramme;
  try {
    programme = await Programme.findById(id).populate("createur");
    if (!programme) {
      const error = new HttpError("there is no programme", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find programmes." + err,
      500
    );

    return next(error);
  }

  res.json({ programme });
};

// export const getProgrammeByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const getProgrammesByCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const createur: string = req.params.creator;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let programmes: IProgramme[];
  try {
    programmes = await Programme.find({ createur })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!programmes) {
      const error = new HttpError("there is no programmes", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find programmes." + err,
      500
    );

    return next(error);
  }

  let programmesArray: IProgramme[] = [];
  for (let i = 0; i < programmes.length; i++) {
    const singleProgramme: IProgramme = {
      _id: programmes[i]._id,
      createur: programmes[i].createur,
      nom: programmes[i].nom,
      type: programmes[i].type,
      description: programmes[i].description,
      jours: programmes[i].jours,
      duree: programmes[i].duree,
      image: programmes[i].image,
      tags: programmes[i].tags,
    };
    programmesArray.push(singleProgramme);
  }

  res.json({ programmes: programmesArray });
};

export const getProgrammesByExercices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let exercices: string[];
  if (typeof req.query.exercices === "string")
    exercices = req.query.exercices.split(",");
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;
  let programmes: IProgramme[];
  try {
    programmes = await Programme.find({ jours: { $elemMatch: { exercices } } })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!programmes) {
      const error = new HttpError("there is no programmes", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find programmes." + err,
      500
    );
    return next(error);
  }
  let programmesArray: IProgramme[] = [];
  for (let i = 0; i < programmes.length; i++) {
    const singleProgramme: IProgramme = {
      _id: programmes[i]._id,
      createur: programmes[i].createur,
      nom: programmes[i].nom,
      type: programmes[i].type,
      description: programmes[i].description,
      jours: programmes[i].jours,
      duree: programmes[i].duree,
      image: programmes[i].image,
      tags: programmes[i].tags,
    };
    programmesArray.push(singleProgramme);
  }
  res.json({ programme: programmesArray });
};

export const getProgrammesByTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let tags: string[];
  if (typeof req.query.tags === "string") tags = req.query.tags.split(",");

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let programmes: IProgramme[];
  try {
    programmes = await Programme.find({ tags: { $all: tags } })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!programmes) {
      const error = new HttpError("there is no programmes", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find programmes." + err,
      500
    );

    return next(error);
  }

  let programmesArray: IProgramme[] = [];
  for (let i = 0; i < programmes.length; i++) {
    const singleProgramme: IProgramme = {
      _id: programmes[i]._id,
      createur: programmes[i].createur,
      nom: programmes[i].nom,
      type: programmes[i].type,
      description: programmes[i].description,
      jours: programmes[i].jours,
      duree: programmes[i].duree,
      image: programmes[i].image,
      tags: programmes[i].tags,
    };
    programmesArray.push(singleProgramme);
  }

  res.json({ programme: programmesArray });
};

export const getExercisesByDay = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const day: string = req.params.jour;

  let exercices;
  try {
    const programme: IProgramme = await Programme.findById(id).populate(
      "createur"
    );
    if (!programme) {
      const error = new HttpError("there is no programme", 404);
      return next(error);
    }
    const jours = programme.jours;
    exercices = jours.filter((jour) => jour.dayNumber.toString() === day);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find programmes." + err,
      500
    );

    return next(error);
  }

  res.json({ exercices: exercices[0].exercices });
};

export const createProgramme = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const programme: IProgramme = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  let jours = [];
  for (let i = 0; i < programme.duree; i++) {
    const jour = {
      dayNumber: i + 1,
    };
    jours.push(jour);
  }

  let createdProgramme;
  try {
    const existingCoach = await Coach.findOne({ user: req.userData._id });

    if (!existingCoach) {
      const error = new HttpError("there is no coach", 404);
      return next(error);
    }

    createdProgramme = new Programme({
      createur: req.userData._id,
      nom: programme.nom,
      type: programme.type,
      description: programme.description,
      jours: jours,
      duree: programme.duree,
      image: programme.image,
      tags: programme.tags,
    });
    await createdProgramme.save();
    existingCoach.programme.push(createdProgramme._id);
    await existingCoach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save programme." + err,
      500
    );
    return next(error);
  }

  res.json({ id: createdProgramme.id });
};

export const updateExercices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const jour: string = req.params.jour;
  const exercices = req.body.exercices;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }
  try {
    const programme = await Programme.findById(id);
    if (!programme) {
      const error = new HttpError("there is no programme", 404);
      return next(error);
    }

    for (let i = 0; i < programme.jours.length; i++) {
      if (programme.jours[i].dayNumber === Number(jour)) {
        programme.jours[i].exercices = exercices;
      }
    }
    programme.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find programmes." + err,
      500
    );
    return next(error);
  }
  res.json({ message: "added!" });
};

export const updateProgramme = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const programme = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const existingProgramme = await programme.findById(id);
    if (!existingProgramme) {
      const error = new HttpError("programme does not exist", 404);
      return next(error);
    }

    if (existingProgramme.createur !== req.userData._id) {
      const error = new HttpError("you can't update this programme", 404);
      return next(error);
    }

    existingProgramme.nom = programme.nom;
    existingProgramme.type = programme.type;
    existingProgramme.description = programme.description;
    existingProgramme.image = programme.image;
    existingProgramme.tags = programme.tags;

    if (programme.duree && existingProgramme.duree !== programme.duree) {
      existingProgramme.duree = programme.duree;
      existingProgramme.jours = []; //function te5ou nb w traja3li jours
    }
    await existingProgramme.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save programme." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteProgramme = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const programme = await Programme.findById(id);
    if (!programme) {
      const error = new HttpError("programme does not exist", 404);
      return next(error);
    }

    if (programme.createur !== req.userData._id) {
      const error = new HttpError("you can't delete this programme", 404);
      return next(error);
    }

    await programme.remove();
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not remove programme",
      500
    );
    return next(error);
  }

  res.status(201).json({ message: "programme removed!" });
};
