import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

import HttpError from "../utils/HttpError";
import vars from "../configs/vars";

import { IUser } from "../models/User";

interface AuthReq extends Request {
  userData: IUser;
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
      email: decodedToken.email,
      phone: decodedToken.phone,
      avatar: decodedToken.avatar,
      type: decodedToken.type,
    };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};

export default authorization;
