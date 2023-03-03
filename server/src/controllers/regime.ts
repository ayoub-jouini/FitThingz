import { NextFunction, Request, Response } from "express";

export const getAllRegimes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getRegimeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

// export const getRegimeByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const getRegimesByCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getRegimesByType = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getRegimesByTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const createRegime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const addRepas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const deleteRepas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const updateRegime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const deleteRegime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
