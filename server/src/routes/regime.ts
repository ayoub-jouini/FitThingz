import { Router } from "express";
import { body } from "express-validator";

import * as regimeControllers from "../controllers/regime";

import authorization from "../middlewares/authorization";
import verifyEmailConfirmation from "../middlewares/verifyEmailConfirmation";

const router = Router();

router.get("/", regimeControllers.getAllRegimes);

router.get("/id/:id", regimeControllers.getRegimeById);

// router.get('/name/:name', regimeControllers.getRegimeByName);

router.get("/creator/:creator", regimeControllers.getRegimesByCreator);

router.get("/type/:type", regimeControllers.getRegimesByType);

router.get("/tags", regimeControllers.getRegimesByTags);

router.use(
  authorization
  // verifyEmailConfirmation
);

router.post("/", regimeControllers.createRegime);

router.patch("/repas/:id/:jour", regimeControllers.updateRepas);

router.patch("/:id", regimeControllers.updateRegime);

router.delete("/:id", regimeControllers.deleteRegime);

export default router;
