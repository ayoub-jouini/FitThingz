import { Router } from "express";

import * as coachControllers from "../controllers/coach";
import fileUpload from "../middlewares/fileUpload";
import authorization from "../middlewares/authorization";
import verifyEmailConfirmation from "../middlewares/verifyEmailConfirmation";

const router = Router();

router.get("/", coachControllers.getAllCoachs);

router.get("/request", coachControllers.getAllRequests);

router.get("/id/:id", coachControllers.getCoachById);

router.get("/user/:id", coachControllers.getCoachByUser);

router.get("/statistics/:id", coachControllers.CoachStatistics);

// router.get('/name/:name', coachControllers.getCoachByName);

router.use(
  authorization
  // , verifyEmailConfirmation
);

router.get("/sportifs", coachControllers.getCoachsClientsRequests);

router.post("/", fileUpload.array("images", 2), coachControllers.createCoach);

router.patch("/validate/:id", coachControllers.validateCoach);

router.patch("/tarification/:id", coachControllers.addTarification);

router.patch("/sportif/request/:id", coachControllers.sendRequest);

router.patch("/sportif/accept/:id", coachControllers.acceptRequest);

router.patch("/sportif/delete/:id", coachControllers.deleteRequest);

router.patch("/commentaire/:id", coachControllers.addCommentaire);

router.patch(
  "/commentaire/delete/:idCoach/:idCommentaire",
  coachControllers.deleteCommentaire
);

router.patch("/disponibilite", coachControllers.disponibiliteToggel);

router.patch("/:id", coachControllers.updateCoach);

router.delete("/:id", coachControllers.deleteCoach);

export default router;
