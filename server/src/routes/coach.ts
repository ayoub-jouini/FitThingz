import { Router } from "express";
import { body } from "express-validator";

import * as coachControllers from "../controllers/coach";

const router = Router();

router.get("/", coachControllers.getAllCoachs);

router.get("/id/:id", coachControllers.getCoachById);

// router.get('/name/:name', coachControllers.getCoachByName);

router.post("/", coachControllers.createCoach);

router.patch("/validate/:id", coachControllers.validateCoach);

router.patch("/tarification/:id", coachControllers.addTarification);

router.patch(
  "/commentaire/:idCoach/:idCommentaire",
  coachControllers.addCommentaire
);

router.patch("/disponibilite", coachControllers.disponibiliteToggel);

router.patch("/:id", coachControllers.updateCoach);

router.delete("/:id", coachControllers.deleteCoach);

export default router;
