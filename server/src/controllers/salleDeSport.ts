import { NextFunction, Request, Response } from "express";

export const getAllSalles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getSalleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

// export const getSalleByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const getSalleByOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const createSalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const validateSalle = async (
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

export const updateSalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const deleteSalle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
