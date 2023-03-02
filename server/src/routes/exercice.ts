import { Router } from "express";

import * as exerciceControllers from "../controllers/exercice";

const router = Router();

router.get("/", exerciceControllers.getAllExercices);

router.get("/id/:id", exerciceControllers.getExerciceById);

// router.get("/name/:name", exerciceControllers.getExerciceByName);

router.get("/creator/:creator", exerciceControllers.getExerciceByCreator);

router.get("/bodypart/:bodypart", exerciceControllers.getExercicesByBodyPart);

router.get("/target/:taget", exerciceControllers.getExercicesByTarget);

router.get("/tags/tag", exerciceControllers.getExercicesByTags);

router.post("/", exerciceControllers.createExercice);

router.patch("/:id", exerciceControllers.updateExercice);

router.delete("/:id", exerciceControllers.deleteExercice);

export default router;
