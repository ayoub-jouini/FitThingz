import { Router } from "express";
import * as userControllers from "../controllers/user";

import fileUpload from "../middlewares/fileUpload";

const router = Router();

router.get("/", userControllers.getAllUsers);

router.get("/id/:id", userControllers.getUserById);

// router.get("/name/:name", userControllers.getUsersByName);

router.patch("/id/:id", userControllers.updateUser);

router.patch(
  "/avatar/:id",
  fileUpload.single("avatar"),
  userControllers.uploadAvatar
);

router.patch("/deactivate/:id", userControllers.deactivateAccount);

router.delete("/:id", userControllers.deleteUser);

export default router;
