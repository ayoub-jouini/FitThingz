import { Router } from "express";
import { body } from "express-validator";

import * as salleControllers from "../controllers/salleDeSport";

const router = Router();

router.get("/", salleControllers.getAllSalles);

router.get("/id/:id", salleControllers.getSalleById);

// router.get('/name/:name', salleControllers.getSalleByName);

router.post("/", salleControllers.createSalle);

router.patch("/validate/:id", salleControllers.validateSalle);

router.patch("/tarification/:id", salleControllers.addTarification);

router.patch("/commentaire/:id", salleControllers.addCommentaire);

router.delete("/:id", salleControllers.deleteSalle);

export default router;
