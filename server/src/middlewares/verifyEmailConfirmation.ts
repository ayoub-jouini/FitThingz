import { Request, Response, NextFunction } from "express";

import HttpError from "../utils/HttpError";
import { AuthReq } from "./authorization";

const verifyEmailConfirmation = (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.userData.emailConfirmed) {
      res.redirect("/api/auth/send-confirmation-token");
    }
    next();
  } catch (err) {
    const error = new HttpError("Access denied! Invalid Token.", 404);
    return next(error);
  }
};

export default verifyEmailConfirmation;
