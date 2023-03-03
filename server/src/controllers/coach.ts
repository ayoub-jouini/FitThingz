import { NextFunction, Request, Response } from "express";

export const getAllCoachs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getCoachById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

// export const getCoachByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const createCoach = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const validateCoach = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const addTarification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const addCommentaire = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const updateCoach = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const deleteCoach = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
