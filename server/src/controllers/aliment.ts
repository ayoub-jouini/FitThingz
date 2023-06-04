import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import HttpError from "../utils/HttpError";
import { AuthReq } from "../middlewares/authorization";

import Aliment, { IAliment } from "../models/Aliment";
import cloudinary from "../configs/cloudinaySetup";

export const getAllAliment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let aliment: IAliment[];
  try {
    aliment = await Aliment.find({})
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!aliment) {
      const error = new HttpError("there is no aliment", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find aliment." + err,
      500
    );

    return next(error);
  }

  let alimentArray: IAliment[] = [];
  for (let i = 0; i < aliment.length; i++) {
    const singlealiment: IAliment = {
      _id: aliment[i]._id,
      createur: aliment[i].createur,
      titre: aliment[i].titre,
      category: aliment[i].titre,
      description: aliment[i].description,
      dosage: aliment[i].dosage,
      calories: aliment[i].calories,
      carbs: aliment[i].carbs,
      fats: aliment[i].fats,
      proteins: aliment[i].proteins,
      image: aliment[i].image,
    };
    alimentArray.push(singlealiment);
  }

  res.json({ aliment: alimentArray });
};

export const getAlimentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;

  let aliment: IAliment;
  try {
    aliment = await Aliment.findById(id).populate("createur");
    if (!aliment) {
      const error = new HttpError("there is no aliment", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find aliments." + err,
      500
    );

    return next(error);
  }

  res.json({ aliment });
};

// export const getAlimentsByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const getAlimentsByCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const createur: string = req.params.creator;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let aliment: IAliment[];
  try {
    aliment = await Aliment.find({ createur })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!aliment) {
      const error = new HttpError("there is no aliment", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find aliment." + err,
      500
    );

    return next(error);
  }

  let alimentArray: IAliment[] = [];
  for (let i = 0; i < aliment.length; i++) {
    const singlealiment: IAliment = {
      _id: aliment[i]._id,
      createur: aliment[i].createur,
      titre: aliment[i].titre,
      category: aliment[i].titre,
      description: aliment[i].description,
      dosage: aliment[i].dosage,
      calories: aliment[i].calories,
      carbs: aliment[i].carbs,
      fats: aliment[i].fats,
      proteins: aliment[i].proteins,
      image: aliment[i].image,
    };
    alimentArray.push(singlealiment);
  }

  res.json({ aliment: alimentArray });
};

export const getAlimentsByDosage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dosage: string = req.params.dosage;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let aliment: IAliment[];
  try {
    aliment = await Aliment.find({ dosage })
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!aliment) {
      const error = new HttpError("there is no aliment", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find aliment." + err,
      500
    );

    return next(error);
  }

  let alimentArray: IAliment[] = [];
  for (let i = 0; i < aliment.length; i++) {
    const singlealiment: IAliment = {
      _id: aliment[i]._id,
      createur: aliment[i].createur,
      titre: aliment[i].titre,
      category: aliment[i].titre,
      description: aliment[i].description,
      dosage: aliment[i].dosage,
      calories: aliment[i].calories,
      carbs: aliment[i].carbs,
      fats: aliment[i].fats,
      proteins: aliment[i].proteins,
      image: aliment[i].image,
    };
    alimentArray.push(singlealiment);
  }

  res.json({ aliment: alimentArray });
};

export const getAlimentsByCalories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const calories: string = req.params.calories;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let aliment: IAliment[];
  try {
    aliment = await Aliment.find({ calories })
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!aliment) {
      const error = new HttpError("there is no aliment", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find aliment." + err,
      500
    );

    return next(error);
  }

  let alimentArray: IAliment[] = [];
  for (let i = 0; i < aliment.length; i++) {
    const singlealiment: IAliment = {
      _id: aliment[i]._id,
      createur: aliment[i].createur,
      titre: aliment[i].titre,
      category: aliment[i].titre,
      description: aliment[i].description,
      dosage: aliment[i].dosage,
      calories: aliment[i].calories,
      carbs: aliment[i].carbs,
      fats: aliment[i].fats,
      proteins: aliment[i].proteins,
      image: aliment[i].image,
    };
    alimentArray.push(singlealiment);
  }

  res.json({ aliment: alimentArray });
};

export const getAlimentByCarbs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carbs: string = req.params.carbs;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let aliment: IAliment[];
  try {
    aliment = await Aliment.find({ carbs })
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!aliment) {
      const error = new HttpError("there is no aliment", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find aliment." + err,
      500
    );

    return next(error);
  }

  let alimentArray: IAliment[] = [];
  for (let i = 0; i < aliment.length; i++) {
    const singlealiment: IAliment = {
      _id: aliment[i]._id,
      createur: aliment[i].createur,
      titre: aliment[i].titre,
      category: aliment[i].titre,
      description: aliment[i].description,
      dosage: aliment[i].dosage,
      calories: aliment[i].calories,
      carbs: aliment[i].carbs,
      fats: aliment[i].fats,
      proteins: aliment[i].proteins,
      image: aliment[i].image,
    };
    alimentArray.push(singlealiment);
  }

  res.json({ aliment: alimentArray });
};

export const getAlimentsByFats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const fats: string = req.params.fats;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let aliment: IAliment[];
  try {
    aliment = await Aliment.find({ fats })
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!aliment) {
      const error = new HttpError("there is no aliment", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find aliment." + err,
      500
    );

    return next(error);
  }

  let alimentArray: IAliment[] = [];
  for (let i = 0; i < aliment.length; i++) {
    const singlealiment: IAliment = {
      _id: aliment[i]._id,
      createur: aliment[i].createur,
      titre: aliment[i].titre,
      category: aliment[i].titre,
      description: aliment[i].description,
      dosage: aliment[i].dosage,
      calories: aliment[i].calories,
      carbs: aliment[i].carbs,
      fats: aliment[i].fats,
      proteins: aliment[i].proteins,
      image: aliment[i].image,
    };
    alimentArray.push(singlealiment);
  }

  res.json({ aliment: alimentArray });
};

export const getAlimentByProteins = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const proteins: string = req.params.proteins;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let aliment: IAliment[];
  try {
    aliment = await Aliment.find({ proteins })
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!aliment) {
      const error = new HttpError("there is no aliment", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find aliment." + err,
      500
    );

    return next(error);
  }

  let alimentArray: IAliment[] = [];
  for (let i = 0; i < aliment.length; i++) {
    const singlealiment: IAliment = {
      _id: aliment[i]._id,
      createur: aliment[i].createur,
      titre: aliment[i].titre,
      category: aliment[i].titre,
      description: aliment[i].description,
      dosage: aliment[i].dosage,
      calories: aliment[i].calories,
      carbs: aliment[i].carbs,
      fats: aliment[i].fats,
      proteins: aliment[i].proteins,
      image: aliment[i].image,
    };
    alimentArray.push(singlealiment);
  }

  res.json({ aliment: alimentArray });
};

export const getAlimentByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const category: string = req.params.category;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let aliment: IAliment[];
  try {
    aliment = await Aliment.find({ category })
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!aliment) {
      const error = new HttpError("there is no aliment", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find aliment." + err,
      500
    );

    return next(error);
  }

  let alimentArray: IAliment[] = [];
  for (let i = 0; i < aliment.length; i++) {
    const singlealiment: IAliment = {
      _id: aliment[i]._id,
      createur: aliment[i].createur,
      titre: aliment[i].titre,
      category: aliment[i].titre,
      description: aliment[i].description,
      dosage: aliment[i].dosage,
      calories: aliment[i].calories,
      carbs: aliment[i].carbs,
      fats: aliment[i].fats,
      proteins: aliment[i].proteins,
      image: aliment[i].image,
    };
    alimentArray.push(singlealiment);
  }

  res.json({ aliment: alimentArray });
};

export const createAliment = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const aliment = req.body;

  //@ts-ignore
  const ImageFile = req.file.path;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const uploadImage = await cloudinary.uploader.upload(
      ImageFile,
      function (error: any, result: any) {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      }
    );

    const createdAliment = new Aliment({
      createur: req.userData._id,
      titre: aliment.titre,
      category: aliment.category,
      description: aliment.description,
      dosage: aliment.dosage,
      calories: aliment.calories,
      carbs: aliment.carbs,
      fats: aliment.fats,
      proteins: aliment.proteins,
      image: uploadImage.url,
    });
    await createdAliment.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save aliment." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "created!" });
};

export const updateAliment = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const aliment = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const existingAliment = await Aliment.findById(id);
    if (!existingAliment) {
      const error = new HttpError("aliment does not exist", 404);
      return next(error);
    }

    if (existingAliment.createur != req.userData._id) {
      const error = new HttpError("you can't update this aliment", 404);
      return next(error);
    }

    existingAliment.titre = aliment.titre;
    existingAliment.category = aliment.category;
    existingAliment.description = aliment.description;
    existingAliment.dosage = aliment.dosage;
    existingAliment.calories = aliment.calories;
    existingAliment.carbs = aliment.carbs;
    existingAliment.fats = aliment.fats;
    existingAliment.proteins = aliment.proteins;

    await existingAliment.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save aliment." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteAliment = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const aliment = await Aliment.findById(id);
    if (!aliment) {
      const error = new HttpError("aliment does not exist", 404);
      return next(error);
    }

    if (aliment.createur != req.userData._id) {
      const error = new HttpError("you can't delete this aliment", 404);
      return next(error);
    }

    await aliment.remove();
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not remove aliment",
      500
    );
    return next(error);
  }

  res.status(201).json({ message: "aliment removed!" });
};
