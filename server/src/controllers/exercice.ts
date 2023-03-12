import { NextFunction, Request, Response } from "express";

import HttpError from "../utils/HttpError";
import { AuthReq } from "../middlewares/authorization";

import Exercice, { IExercice } from "../models/Exercice";
import { validationResult } from "express-validator";

export const getAllExercices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let exercices: IExercice[];
  try {
    exercices = await Exercice.find({})
      .skip((page - 1) * limit)
      .limit(limit);
    if (!exercices) {
      const error = new HttpError("there is no exercices", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find exercices." + err,
      500
    );

    return next(error);
  }

  let exerciceArray: IExercice[] = [];
  for (let i = 0; i < exercices.length; i++) {
    const singleexercice: IExercice = {
      _id: exercices[i]._id,
      createur: exercices[i].createur,
      nom: exercices[i].nom,
      bodyPart: exercices[i].bodyPart,
      target: exercices[i].target,
      equipment: exercices[i].equipment,
      image: exercices[i].image,
      gifUrl: exercices[i].gifUrl,
      tags: exercices[i].tags,
    };
    exerciceArray.push(singleexercice);
  }

  res.json({ exercices: exerciceArray });
};

export const getExerciceById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  let exercice: IExercice;
  try {
    exercice = await Exercice.findById(id);
    if (!exercice) {
      const error = new HttpError("there is no exercice", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find exercices." + err,
      500
    );

    return next(error);
  }

  res.json({ exercice });
};

// export const getExerciceByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const getExerciceByCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const createur: string = req.params.creator;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let exercices: IExercice[];
  try {
    exercices = await Exercice.find({ createur })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!exercices) {
      const error = new HttpError("there is no exercices", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find exercices." + err,
      500
    );

    return next(error);
  }

  let exerciceArray: IExercice[] = [];
  for (let i = 0; i < exercices.length; i++) {
    const singleexercice: IExercice = {
      _id: exercices[i]._id,
      createur: exercices[i].createur,
      nom: exercices[i].nom,
      bodyPart: exercices[i].bodyPart,
      target: exercices[i].target,
      equipment: exercices[i].equipment,
      image: exercices[i].image,
      gifUrl: exercices[i].gifUrl,
      tags: exercices[i].tags,
    };
    exerciceArray.push(singleexercice);
  }

  res.json({ exercices: exerciceArray });
};

export const getExercicesByBodyPart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bodyPart: string = req.params.bodypart;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let exercices: IExercice[];
  try {
    exercices = await Exercice.find({ bodyPart })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!exercices) {
      const error = new HttpError("there is no exercices", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find exercices." + err,
      500
    );

    return next(error);
  }

  let exerciceArray: IExercice[] = [];
  for (let i = 0; i < exercices.length; i++) {
    const singleexercice: IExercice = {
      _id: exercices[i]._id,
      createur: exercices[i].createur,
      nom: exercices[i].nom,
      bodyPart: exercices[i].bodyPart,
      target: exercices[i].target,
      equipment: exercices[i].equipment,
      image: exercices[i].image,
      gifUrl: exercices[i].gifUrl,
      tags: exercices[i].tags,
    };
    exerciceArray.push(singleexercice);
  }

  res.json({ exercices: exerciceArray });
};

export const getExercicesByTarget = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const target: string = req.params.target;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let exercices: IExercice[];
  try {
    exercices = await Exercice.find({ target })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!exercices) {
      const error = new HttpError("there is no exercices", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find exercices." + err,
      500
    );

    return next(error);
  }

  let exerciceArray: IExercice[] = [];
  for (let i = 0; i < exercices.length; i++) {
    const singleexercice: IExercice = {
      _id: exercices[i]._id,
      createur: exercices[i].createur,
      nom: exercices[i].nom,
      bodyPart: exercices[i].bodyPart,
      target: exercices[i].target,
      equipment: exercices[i].equipment,
      image: exercices[i].image,
      gifUrl: exercices[i].gifUrl,
      tags: exercices[i].tags,
    };
    exerciceArray.push(singleexercice);
  }

  res.json({ exercices: exerciceArray });
};

export const getExercicesByEquipment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const equipment: string = req.params.equipment;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let exercices: IExercice[];
  try {
    exercices = await Exercice.find({ equipment })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!exercices) {
      const error = new HttpError("there is no exercices", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find exercices." + err,
      500
    );

    return next(error);
  }

  let exerciceArray: IExercice[] = [];
  for (let i = 0; i < exercices.length; i++) {
    const singleexercice: IExercice = {
      _id: exercices[i]._id,
      createur: exercices[i].createur,
      nom: exercices[i].nom,
      bodyPart: exercices[i].bodyPart,
      target: exercices[i].target,
      equipment: exercices[i].equipment,
      image: exercices[i].image,
      gifUrl: exercices[i].gifUrl,
      tags: exercices[i].tags,
    };
    exerciceArray.push(singleexercice);
  }

  res.json({ exercices: exerciceArray });
};

export const getExercicesByTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let tags: string[];
  if (typeof req.query.tags === "string") tags = req.query.tags.split(",");

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let exercices: IExercice[];
  try {
    exercices = await Exercice.find({ tags: { $all: tags } })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!exercices) {
      const error = new HttpError("there is no exercices", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find exercices." + err,
      500
    );

    return next(error);
  }

  let exerciceArray: IExercice[] = [];
  for (let i = 0; i < exercices.length; i++) {
    const singleexercice: IExercice = {
      _id: exercices[i]._id,
      createur: exercices[i].createur,
      nom: exercices[i].nom,
      bodyPart: exercices[i].bodyPart,
      target: exercices[i].target,
      equipment: exercices[i].equipment,
      image: exercices[i].image,
      gifUrl: exercices[i].gifUrl,
      tags: exercices[i].tags,
    };
    exerciceArray.push(singleexercice);
  }

  res.json({ exercices: exerciceArray });
};

export const createExercice = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const exercice = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const createdExercice = new Exercice({
      createur: req.userData,
      nom: exercice.nom,
      bodyPart: exercice.bodyPart,
      target: exercice.target,
      equipment: exercice.equipment,
      tags: exercice.tags,
    });
    await createdExercice.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save exercice." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "created!" });
};

export const updateExercice = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const exercice = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const existingExercice = await Exercice.findById(id);
    if (!existingExercice) {
      const error = new HttpError("exercice does not exist", 404);
      return next(error);
    }

    if (existingExercice.createur !== req.userData) {
      const error = new HttpError("you can't update this exercice", 404);
      return next(error);
    }

    existingExercice.nom = exercice.nom;
    existingExercice.bodyPart = exercice.bodyPart;
    existingExercice.target = exercice.target;
    existingExercice.equipment = exercice.equipment;
    existingExercice.tags = exercice.tags;

    await existingExercice.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save exercice." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteExercice = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const exercice = await Exercice.findById(id);
    if (!exercice) {
      const error = new HttpError("exercice does not exist", 404);
      return next(error);
    }

    if (exercice.createur !== req.userData) {
      const error = new HttpError("you can't delete this exercice", 404);
      return next(error);
    }
    await exercice.remove();
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not remove exercice",
      500
    );
    return next(error);
  }

  res.status(201).json({ message: "exercice removed!" });
};
