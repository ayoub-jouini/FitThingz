import { Router } from "express";
import { body } from "express-validator";

import * as exerciceControllers from "../controllers/exercice";

const router = Router();

router.get("/", exerciceControllers.getAllExercices);

router.get("/id/:id", exerciceControllers.getExerciceById);

// router.get("/name/:name", exerciceControllers.getExerciceByName);

router.get("/creator/:creator", exerciceControllers.getExerciceByCreator);

router.get("/bodypart/:bodypart", exerciceControllers.getExercicesByBodyPart);

router.get("/target/:taget", exerciceControllers.getExercicesByTarget);

router.get("/tags", exerciceControllers.getExercicesByTags);

router.post(
  "/",
  body("nom").notEmpty(),
  body("bodyPart").notEmpty(),
  body("target").notEmpty(),
  body("equipment").notEmpty(),
  exerciceControllers.createExercice
);

router.patch(
  "/:id",
  //   body("nom").notEmpty(),
  //   body("bodyPart").notEmpty(),
  //   body("target").notEmpty(),
  //   body("equipment").notEmpty(),
  exerciceControllers.updateExercice
);

router.delete("/:id", exerciceControllers.deleteExercice);

export default router;
