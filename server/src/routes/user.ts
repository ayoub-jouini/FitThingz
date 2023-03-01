import { Router } from "express";
import * as userControllers from "../controllers/user";

const router = Router();

router.get("/", userControllers.getAllUsers);

router.get("/id/:id", userControllers.getUserById);

router.get("/name/:name", userControllers.getUsersByName);

router.patch("/:id", userControllers.updateUser);

router.patch("/avatar/:id", userControllers.uploadAvatar);

router.delete("/:id", userControllers.deleteUser);

export default router;
