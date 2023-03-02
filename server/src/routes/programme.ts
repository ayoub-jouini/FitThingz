import { Router } from "express";

import * as programmeControllers from "../controllers/programme";

const router = Router();

router.get("/", programmeControllers.getAllProgrammes);

router.get("/id/:id", programmeControllers.getProgrammeById);

// router.get("/name/:name", programmeControllers.getProgrammeByName);

router.get("/creator/:creator", programmeControllers.getProgrammesByCreator);

router.get("/exercice/:exercice", programmeControllers.getProgrammesByExercice);

router.get("/tags/:tags", programmeControllers.getProgrammesByTags);

router.post("/", programmeControllers.createProgramme);

router.patch("/add/:id", programmeControllers.addExercice);

router.patch(
  "/delete/:idProframme/:idExercice",
  programmeControllers.deleteExercice
);

router.patch("/:id", programmeControllers.updateProgramme);

router.delete("/:id", programmeControllers.deleteExercice);

export default router;
