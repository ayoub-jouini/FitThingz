import { Router } from "express";
import { body } from "express-validator";

import * as alimentControllers from "../controllers/aliment";

const router = Router();

router.get("/", alimentControllers.getAllAliment);

router.get("/id/:id", alimentControllers.getAlimentById);

// router.get("/name/:name", alimentControllers.getAlimentsByName);

router.get("/creator/:creator", alimentControllers.getAlimentsByCreator);

router.get("/dosage/:dosage", alimentControllers.getAlimentsByDosage);

router.get("/calories/:calories", alimentControllers.getAlimentsByCalories);

router.get("/carbs/:carbs", alimentControllers.getAlimentByCarbs);

router.get("/fats/:fats", alimentControllers.getAlimentsByFats);

router.get("/proteins/:proteins", alimentControllers.getAlimentByProteins);

router.post(
  "/",
  body("titre").notEmpty(),
  body("description").notEmpty(),
  body("dosage").notEmpty().isNumeric(),
  body("calories").notEmpty().isNumeric(),
  body("carbs").notEmpty().isNumeric(),
  body("fats").notEmpty().isNumeric(),
  body("proteins").notEmpty().isNumeric(),
  alimentControllers.createAliment
);

router.patch(
  "/:id",
  body("dosage").isNumeric(),
  body("calories").isNumeric(),
  body("carbs").isNumeric(),
  body("fats").isNumeric(),
  body("proteins").isNumeric(),
  alimentControllers.updateAliment
);

router.delete("/:id", alimentControllers.deleteAliment);

export default router;
