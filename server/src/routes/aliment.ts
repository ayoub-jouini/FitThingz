import { Router } from "express";
import { body } from "express-validator";

import * as alimentControllers from "../controllers/aliment";

import authorization from "../middlewares/authorization";
import verifyEmailConfirmation from "../middlewares/verifyEmailConfirmation";
import fileUpload from "../middlewares/fileUpload";

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

router.get("/category/:category", alimentControllers.getAlimentByCategory);

router.use(
  authorization
  // , verifyEmailConfirmation
);

router.post(
  "/",
  fileUpload.single("image"),

  alimentControllers.createAliment
);

router.patch("/:id", alimentControllers.updateAliment);

router.delete("/:id", alimentControllers.deleteAliment);

export default router;
