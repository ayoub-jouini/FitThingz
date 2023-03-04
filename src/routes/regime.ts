import { Router } from "express";
import { body } from "express-validator";

import * as regimeControllers from "../controllers/regime";

const router = Router();

router.get("/", regimeControllers.getAllRegimes);

router.get("/id/:id", regimeControllers.getRegimeById);

// router.get('/name/:name', regimeControllers.getRegimeByName);

router.get("/creator/:creator", regimeControllers.getRegimesByCreator);

router.get("/type/:type", regimeControllers.getRegimesByType);

router.get("/tags", regimeControllers.getRegimesByTags);

router.post("/", regimeControllers.createRegime);

router.patch("/repas/add/:id", regimeControllers.addRepas);

router.patch("/repas/delete/:id", regimeControllers.deleteRegime);

router.patch("/:id", regimeControllers.updateRegime);

router.delete("/:id", regimeControllers.deleteRegime);

export default router;
