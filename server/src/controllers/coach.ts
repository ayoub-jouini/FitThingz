import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import HttpError from "../utils/HttpError";

import Coach, { ICoach } from "../models/Coach";
import Tarification, { ITarification } from "../models/Tarification";
import Commentaire, { ICommentaire } from "../models/Commentaire";

export const getAllCoachs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let coach: ICoach[];
  try {
    coach = await Coach.find({})
      .skip((page - 1) * limit)
      .limit(limit);
    if (!coach) {
      const error = new HttpError("there is no coach", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find coach." + err,
      500
    );

    return next(error);
  }

  let coachArray: ICoach[] = [];
  for (let i = 0; i < coach.length; i++) {
    const singlecoach: ICoach = {
      _id: coach[i]._id,
      user: coach[i].user,
      identite: coach[i].identite,
      experience: coach[i].experience,
      conn_aca: coach[i].conn_aca,
      tarification: coach[i].tarification,
      exercice: coach[i].exercice,
      programme: coach[i].programme,
      regime: coach[i].regime,
      sportif: coach[i].sportif,
      commentaire: coach[i].commentaire,
      verif: coach[i].verif,
    };
    coachArray.push(singlecoach);
  }

  res.json({ coach: coachArray });
};

export const getCoachById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;

  let coach: ICoach;
  try {
    coach = await Coach.findById(id);
    if (!coach) {
      const error = new HttpError("there is no coach", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find coachs." + err,
      500
    );

    return next(error);
  }

  res.json({ coach });
};

// export const getCoachByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const createCoach = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const coach = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const createdcoach = new Coach({
      //@ts-ignore
      _id: req.user._id,
      user: req.user,
      identite: coach.identite,
      experience: coach.experience,
      conn_aca: coach.conn_aca,
    });
    await createdcoach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save coach." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "created!" });
};

export const validateCoach = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const coach = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  //@ts-ignore
  if (req.user.type !== "admin") {
    const error = new HttpError("you can't update this coach", 404);
    return next(error);
  }

  try {
    const existingcoach = await Coach.findById(id);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    existingcoach.verif = true;

    await existingcoach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save coach." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const addTarification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const coach = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    //@ts-ignore
    const existingcoach = await Coach.findById(req.user._id);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    if (existingcoach.user !== req.user) {
      const error = new HttpError("you can't update this coach", 404);
      return next(error);
    }

    const newTarification: ITarification = new Tarification({
      titre: coach.tarification.titre,
      description: coach.tarification.description,
      duree: coach.tarification.duree,
      prix: coach.tarification.prix,
      promo: coach.tarification.promo,
    });

    existingcoach.tarification.push(newTarification);

    await existingcoach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save coach." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteTarification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    //@ts-ignore
    const existingcoach = await Coach.findById(req.user._id);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    if (existingcoach.user !== req.user) {
      const error = new HttpError("you can't update this coach", 404);
      return next(error);
    }

    existingcoach.update({
      $pull: { tarification: { $elemMatch: { _id: id } } },
    });

    await existingcoach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save coach." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const addCommentaire = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const commentaire = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    //@ts-ignore
    const existingcoach = await Coach.findById(id);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    const newCommentaire: ICommentaire = new Commentaire({
      user: req.user,
      avatar: commentaire.avatar,
      commentaire: commentaire.commentaire,
    });

    existingcoach.commentaire.push(newCommentaire);

    await existingcoach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save Commentaire." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteCommentaire = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idCoach = req.params.idCoach;
  const idCommentaire = req.params.idCommentaire;

  try {
    //@ts-ignore
    const existingcoach = await Coach.findById(idCoach);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    const existingCommentaire: ICommentaire = existingcoach.commentaire.find(
      (value) => value._id === idCommentaire
    );

    if (existingCommentaire.user !== req.user) {
      const error = new HttpError("you can't update this commentaire", 404);
      return next(error);
    }

    existingcoach.update({
      $pull: { commentaire: { $elemMatch: { _id: idCommentaire } } },
    });

    await existingcoach.save();

    await existingcoach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save Commentaire." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const updateCoach = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const coach = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const existingcoach = await Coach.findById(id);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    if (existingcoach.user !== req.user) {
      const error = new HttpError("you can't update this coach", 404);
      return next(error);
    }

    existingcoach.identite = coach.identite;
    existingcoach.experience = coach.experience;
    existingcoach.conn_aca = coach.conn_aca;

    await existingcoach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save coach." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteCoach = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const coach = await Coach.findById(id);
    if (!coach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    //@ts-ignore
    if (coach.user !== req.user && req.user.type !== "admin") {
      const error = new HttpError("you can't delete this coach", 404);
      return next(error);
    }

    await coach.remove();
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not remove coach",
      500
    );
    return next(error);
  }

  res.status(201).json({ message: "coach removed!" });
};
