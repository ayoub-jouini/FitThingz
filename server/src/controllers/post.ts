import { NextFunction, Request, Response } from "express";

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getPostsByCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const getPostsByTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

// export const getPostsByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const addCommentaire = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
