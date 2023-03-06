import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import HttpError from "../utils/HttpError";

import SalleDeSport, { ISalleDeSport } from "../models/SalleDeSport";
import Tarification, { ITarification } from "../models/Tarification";
import Commentaire, { ICommentaire } from "../models/Commentaire";

export const getAllSalles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let salles: ISalleDeSport[];
  try {
    salles = await SalleDeSport.find({})
      .skip((page - 1) * limit)
      .limit(limit);
    if (!salles) {
      const error = new HttpError("there is no salle", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find salle." + err,
      500
    );

    return next(error);
  }

  let salleArray: ISalleDeSport[] = [];
  for (let i = 0; i < salles.length; i++) {
    const singlesalle: ISalleDeSport = {
      _id: salles[i]._id,
      createur: salles[i].createur,
      nom: salles[i].nom,
      description: salles[i].description,
      lieu: salles[i].lieu,
      ouverture: salles[i].ouverture,
      cloture: salles[i].cloture,
      jours_sem: salles[i].jours_sem,
      equipements: salles[i].equipements,
      sportif: salles[i].sportif,
      tarification: salles[i].tarification,
      commentaire: salles[i].commentaire,
      verif: salles[i].verif,
    };
    salleArray.push(singlesalle);
  }

  res.json({ salle: salleArray });
};

export const getSalleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  let salle: ISalleDeSport;
  try {
    salle = await SalleDeSport.findById(id);
    if (!salle) {
      const error = new HttpError("there is no salle", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find salles." + err,
      500
    );

    return next(error);
  }

  res.json({ salle });
};

// export const getSalleByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const getSalleByOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const createur: string = req.params.creator;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let salles: ISalleDeSport[];
  try {
    salles = await SalleDeSport.find({ createur })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!salles) {
      const error = new HttpError("there is no salles", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find salles." + err,
      500
    );

    return next(error);
  }

  let sallesArray: ISalleDeSport[] = [];
  for (let i = 0; i < salles.length; i++) {
    const singleSalleDeSport: ISalleDeSport = {
      _id: salles[i]._id,
      createur: salles[i].createur,
      nom: salles[i].nom,
      description: salles[i].description,
      lieu: salles[i].lieu,
      ouverture: salles[i].ouverture,
      cloture: salles[i].cloture,
      jours_sem: salles[i].jours_sem,
      equipements: salles[i].equipements,
      sportif: salles[i].sportif,
      tarification: salles[i].tarification,
      commentaire: salles[i].commentaire,
      verif: salles[i].verif,
    };
    sallesArray.push(singleSalleDeSport);
  }

  res.json({ salles: sallesArray });
};

export const createSalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const salle = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const createdsalle = new SalleDeSport({
      createur: req.user,
      description: salle.description,
      lieu: salle.lieu,
      ouverture: salle.ouverture,
      cloture: salle.cloture,
      jours_sem: salle.jours_sem,
      equipements: salle.equipements,
    });
    await createdsalle.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save salle." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "created!" });
};

export const validateSalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const addTarification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const salle = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    //@ts-ignore
    const existingsalle = await salle.findById(id);
    if (!existingsalle) {
      const error = new HttpError("salle does not exist", 404);
      return next(error);
    }

    if (existingsalle.createur !== req.user) {
      const error = new HttpError("you can't update this salle", 404);
      return next(error);
    }

    const newTarification: ITarification = new Tarification({
      titre: salle.tarification.titre,
      description: salle.tarification.description,
      duree: salle.tarification.duree,
      prix: salle.tarification.prix,
      promo: salle.tarification.promo,
    });

    existingsalle.tarification.push(newTarification);

    await existingsalle.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save salle." + err,
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
  const idTarification = req.params.idTarification;
  const idSalle = req.params.idSalle;

  try {
    //@ts-ignore
    const existingSalle = await SalleDeSport.findById(idSalle);
    if (!existingSalle) {
      const error = new HttpError("salle does not exist", 404);
      return next(error);
    }

    if (existingSalle.createur !== req.user) {
      const error = new HttpError("you can't update this salle", 404);
      return next(error);
    }

    existingSalle.update({
      $pull: { tarification: { $elemMatch: { _id: idTarification } } },
    });

    await existingSalle.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save salle." + err,
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
    const existingSalle = await SalleDeSport.findById(id);
    if (!existingSalle) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    const newCommentaire: ICommentaire = new Commentaire({
      user: req.user,
      avatar: commentaire.avatar,
      commentaire: commentaire.commentaire,
    });

    existingSalle.commentaire.push(newCommentaire);

    await existingSalle.save();
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
  const idSalle = req.params.idSalle;
  const idCommentaire = req.params.idCommentaire;

  try {
    //@ts-ignore
    const existingSalle = await SalleDeSport.findById(idSalle);
    if (!existingSalle) {
      const error = new HttpError("coach does not exist", 404);
      return next(error);
    }

    const existingCommentaire: ICommentaire = existingSalle.commentaire.find(
      (value) => value._id === idCommentaire
    );

    if (existingCommentaire.user !== req.user) {
      const error = new HttpError("you can't update this commentaire", 404);
      return next(error);
    }

    existingSalle.update({
      $pull: { commentaire: { $elemMatch: { _id: idCommentaire } } },
    });

    await existingSalle.save();

    await existingSalle.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save Commentaire." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const updateSalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const salle = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const existingsalle = await SalleDeSport.findById(id);
    if (!existingsalle) {
      const error = new HttpError("salle does not exist", 404);
      return next(error);
    }

    if (existingsalle.createur !== req.user) {
      const error = new HttpError("you can't update this salle", 404);
      return next(error);
    }

    existingsalle.nom = salle.nom;
    existingsalle.description = salle.description;
    existingsalle.lieu = salle.lieu;
    existingsalle.ouverture = salle.ouverture;
    existingsalle.cloture = salle.cloture;
    existingsalle.jours_sem = salle.jours_sem;
    existingsalle.equipements = salle.equipements;

    await existingsalle.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save salle." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteSalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const salle = await SalleDeSport.findById(id);
    if (!salle) {
      const error = new HttpError("salle does not exist", 404);
      return next(error);
    }

    //@ts-ignore
    if (salle.createur !== req.user && req.user.type !== "admin") {
      const error = new HttpError("you can't delete this salle", 404);
      return next(error);
    }

    await salle.remove();
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not remove salle",
      500
    );
    return next(error);
  }

  res.status(201).json({ message: "salle removed!" });
};
