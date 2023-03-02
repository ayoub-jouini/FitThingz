import { Router } from "express";

import * as sportifControllers from "../controllers/sportif";

const router = Router();

router.get("/", sportifControllers.getAllSportifs);

router.get("/id/:id", sportifControllers.getSportifById);

//router.get("/name/:name", sportifControllers.getSportifByName);

router.post("/", sportifControllers.createSportif);

router.patch("/", sportifControllers.updateSportif);

router.delete("/:id", sportifControllers.deleteSportif);

export default router;
