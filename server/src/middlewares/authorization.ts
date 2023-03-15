import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import { Schema } from "mongoose";

import HttpError from "../utils/HttpError";
import vars from "../configs/vars";

export interface AuthReq extends Request {
  userData: {
    _id: Schema.Types.ObjectId;
    nom: string;
    prenom: string;
    avatar: string;
    type: string;
    emailConfirmed: boolean;
  };
}

const authorization = (req: AuthReq, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodedToken: any = Jwt.verify(token, vars.accessSecret);
    req.userData = {
      _id: decodedToken._id,
      nom: decodedToken.nom,
      prenom: decodedToken.prenom,
      // email: decodedToken.email,
      // phone: decodedToken.phone,
      avatar: decodedToken.avatar,
      type: decodedToken.type,
      emailConfirmed: decodedToken.emailConfirmed,
    };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};

export default authorization;
