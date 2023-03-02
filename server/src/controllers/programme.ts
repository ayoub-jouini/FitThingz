import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import HttpError from "../utils/HttpError";

export const getAllProgrammes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getProgrammeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

// export const getProgrammeByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const getProgrammesByCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getProgrammesByExercice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getProgrammesByTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const createProgramme = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const addExercice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const deleteExercice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const updateProgramme = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const deleteProgramme = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
