import { Router } from "express";
import * as userControllers from "../controllers/user";

import fileUpload from "../middlewares/fileUpload";
import authorization from "../middlewares/authorization";
import verifyEmailConfirmation from "../middlewares/verifyEmailConfirmation";

const router = Router();

router.get("/", userControllers.getAllUsers);

router.get("/id/:id", userControllers.getUserById);

// router.get("/name/:name", userControllers.getUsersByName);

router.get("/statistic", userControllers.adminStatistics);

router.use(
  authorization
  // , verifyEmailConfirmation
);

router.patch("/id/:id", userControllers.updateUser);

router.patch(
  "/avatar/:id",
  fileUpload.single("avatar"),
  userControllers.uploadAvatar
);

router.patch("/deactivate/:id", userControllers.deactivateAccount);

router.delete("/:id", userControllers.deleteUser);

export default router;
