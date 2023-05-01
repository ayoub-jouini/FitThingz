import { Router } from "express";

import * as sportifControllers from "../controllers/sportif";

import authorization from "../middlewares/authorization";
import verifyEmailConfirmation from "../middlewares/verifyEmailConfirmation";

const router = Router();

router.get("/", sportifControllers.getAllSportifs);

router.get("/id/:id", sportifControllers.getSportifById);

//router.get("/name/:name", sportifControllers.getSportifByName);

router.use(
  authorization
  // , verifyEmailConfirmation
);

router.post("/", sportifControllers.createSportif);

router.patch("/", sportifControllers.updateSportif);

router.delete("/:id", sportifControllers.deleteSportif);

export default router;
