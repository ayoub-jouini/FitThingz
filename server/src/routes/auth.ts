import { Router } from "express";
import { body } from "express-validator";

import * as authControllers from "../controllers/auth";

const router = Router();

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  authControllers.login
);

router.post(
  "/register",
  body("nom").notEmpty(),
  body("prenom").notEmpty(),
  body("phone").isLength({ min: 8 }),
  body("email").isEmail(),
  // body("lieu").notEmpty(),
  body("password").isLength({ min: 8 }),
  body("sexe").custom((value) => {
    if (value !== "m" && value !== "f") {
      return false;
    }
    return true;
  }),
  body("type").custom((value) => {
    if (
      value !== "admin" &&
      value !== "coach" &&
      value !== "salle de sport" &&
      value !== "sportif"
    ) {
      return false;
    }
    return true;
  }),
  authControllers.register
);

router.post(
  "/refreshToken",
  body("refreshToken").notEmpty(),
  authControllers.refreshToken
);

router.post("/send-confirmation-token", authControllers.sendConfirmationToken);

router.get("/confirm-email/:token", authControllers.confirmEmail);

router.post("/forgot-password", authControllers.forgotPassword);

router.post("/reset-password/:token", authControllers.resetPassword);

export default router;
