import { Router } from "express";

import * as programmeControllers from "../controllers/programme";

import authorization from "../middlewares/authorization";
import verifyEmailConfirmation from "../middlewares/verifyEmailConfirmation";

const router = Router();

router.get("/", programmeControllers.getAllProgrammes);

router.get("/id/:id", programmeControllers.getProgrammeById);

// router.get("/name/:name", programmeControllers.getProgrammeByName);

router.get("/creator/:creator", programmeControllers.getProgrammesByCreator);

router.get("/exercice", programmeControllers.getProgrammesByExercices);

router.get("/tags/:tags", programmeControllers.getProgrammesByTags);

router.use(
  authorization
  // , verifyEmailConfirmation
);

router.post("/", programmeControllers.createProgramme);

router.patch("/exercices/:id/:jour", programmeControllers.updateExercices);

router.patch("/:id", programmeControllers.updateProgramme);

router.delete("/:id", programmeControllers.deleteProgramme);

export default router;
