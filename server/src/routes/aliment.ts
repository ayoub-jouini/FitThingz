import { Router } from "express";

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

router.post("/", alimentControllers.createAliment);

router.patch("/:id", alimentControllers.updateAliment);

router.delete("/:id", alimentControllers.deleteAliment);

export default router;
