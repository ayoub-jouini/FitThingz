import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import HttpError from "../utils/HttpError";
import { AuthReq } from "../middlewares/authorization";
import cloudinary from "../configs/cloudinaySetup";

import Coach, { ICoach } from "../models/Coach";
import Tarification, { ITarification } from "../models/Tarification";
import Commentaire, { ICommentaire } from "../models/Commentaire";
import Sportif from "../models/Sportif";
import { unlink } from "fs";

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
      .populate("user")
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
      disponibilite: coach[i].disponibilite,
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
    coach = await Coach.findById(id)
      .populate("user")
      .populate("sportif")
      .populate("regime")
      .populate("programme")
      .populate("exercice");
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

export const getCoachByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;

  let coach: ICoach[];
  try {
    coach = await Coach.find({ user: id })
      .populate("user")
      .populate("sportif")
      .populate("regime")
      .populate("programme")
      .populate("exercice");
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

  res.json({ coach: coach[0] });
};

export const getAllRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let coach: ICoach[];
  try {
    coach = await Coach.find({ verif: false })
      .populate("user")
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
      disponibilite: coach[i].disponibilite,
      verif: coach[i].verif,
    };
    coachArray.push(singlecoach);
  }

  res.json({ coach: coachArray });
};

export const getCoachsClientsRequests = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  let coach: ICoach[];
  try {
    coach = await Coach.find({ user: req.userData._id }).populate(
      "spotifDemande"
    );
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

  res.json({ sportifs: coach[0].spotifDemande });
};

// export const getCoachByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const createCoach = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const coach = req.body;

  //@ts-ignore
  const cinFile = req.files[0];
  //@ts-ignore
  const diplomeFile = req.files[1];

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const existingCoach = await Coach.findOne({
      user: req.userData._id,
    }).exec();

    if (existingCoach) {
      const error = new HttpError("coach already exist.", 409);
      return next(error);
    }

    const uploadIdentite = await cloudinary.uploader.upload(
      cinFile.path,
      function (error: any, result: any) {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      }
    );

    unlink(cinFile.path, (err) => {
      console.log(err);
    });
    const uploadExperience = await cloudinary.uploader.upload(
      diplomeFile.path,
      function (error: any, result: any) {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      }
    );
    unlink(diplomeFile.path, (err) => {
      console.log(err);
    });

    const createdcoach = new Coach({
      user: req.userData._id,
      identite: uploadIdentite.url,
      experience: uploadExperience.url,
      conn_aca: coach.college,
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
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  if (req.userData.type !== "admin") {
    const error = new HttpError("you can't update this coach", 404);
    return next(error);
  }

  try {
    const existingcoach = await Coach.findByIdAndUpdate(id, { verif: true });
    console.log("here");
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save coach." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const disponibiliteToggel = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const disponibilite = req.body.disponibilite;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const coach = await Coach.findById({ user: req.userData._id });
    if (!coach) {
      const error = new HttpError("there is no coach", 404);
      return next(error);
    }

    coach.disponibilite = disponibilite;

    coach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update coach." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const addTarification = async (
  req: AuthReq,
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
    const existingcoach = await Coach.findById(req.userData._id);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    if (existingcoach.user !== req.userData._id) {
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
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const existingcoach = await Coach.findById(req.userData._id);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    if (existingcoach.user !== req.userData._id) {
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

export const sendRequest = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const existingcoach = await Coach.findById(id);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    existingcoach.spotifDemande.push(req.userData._id);

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

export const acceptRequest = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const existingcoach = await Coach.find({ user: req.userData._id });

    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    const existingSportif: any = await Sportif.find({ user: id });

    if (!existingSportif) {
      const error = new HttpError("sportif does not exist", 404);
      return next(error);
    }

    existingcoach[0].sportif.push(existingSportif._id);

    const newCoach = existingcoach[0].spotifDemande.filter((sportif) => {
      sportif !== existingSportif[0].user._id;
    });

    existingcoach[0].spotifDemande = newCoach;

    existingSportif[0].coach = existingcoach[0]._id;

    await existingcoach[0].save();
    await existingSportif[0].save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save Commentaire." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteRequest = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const existingcoach = await Coach.find({ user: req.userData._id });

    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    const existingSportif: any = await Sportif.find({ user: id });

    const newCoach = existingcoach[0].spotifDemande.filter((sportif) => {
      sportif !== existingSportif[0].user._id;
    });

    existingcoach[0].spotifDemande = newCoach;

    await existingcoach[0].save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save Commentaire." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const addCommentaire = async (
  req: AuthReq,
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
    const existingcoach = await Coach.findById(id);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    const newCommentaire: ICommentaire = new Commentaire({
      user: req.userData,
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
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const idCoach = req.params.idCoach;
  const idCommentaire = req.params.idCommentaire;

  try {
    const existingcoach = await Coach.findById(idCoach);
    if (!existingcoach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    const existingCommentaire: ICommentaire = existingcoach.commentaire.find(
      (value) => value._id === idCommentaire
    );

    if (
      existingCommentaire.user !== req.userData._id &&
      existingcoach.user !== req.userData._id
    ) {
      const error = new HttpError("you can't update this commentaire", 404);
      return next(error);
    }

    await existingcoach.update({
      $pull: { commentaire: { $elemMatch: { _id: idCommentaire } } },
    });
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
  req: AuthReq,
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

    if (existingcoach.user !== req.userData._id) {
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

export const demandCoach = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const idCoach = req.params.idCoach;

  try {
    const coach = await Coach.findById(idCoach);
    if (!coach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    const sportif = await Sportif.findOne({ user: req.userData._id });
    if (!!sportif.coach) {
      const error = new HttpError("you already have a coach", 402);
      return next(error);
    }

    coach.spotifDemande.push(req.userData._id);

    await coach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find coach." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "send!" });
};

export const demandResponse = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const idSportif = req.params.idSportif;

  try {
    const sportif = await Sportif.findOne({ user: idSportif });

    if (!sportif || !!sportif.coach) {
      const error = new HttpError(
        "sportif does not exist || have a coach",
        404
      );
      return next(error);
    }

    const coach = await Coach.findOne(req.userData._id);

    if (!coach) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    await coach.update({ $pull: { spotifDemande: idSportif } });
    coach.sportif.push(sportif.user);
    await coach.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update coach." + err,
      500
    );
    return next(error);
  }
};

export const deleteCoach = async (
  req: AuthReq,
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

    if (coach.user !== req.userData._id && req.userData.type !== "admin") {
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
