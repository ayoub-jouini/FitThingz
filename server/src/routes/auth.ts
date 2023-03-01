import { Router } from "express";
import { logOut, login, refreshToken, register } from "../controllers/auth";

const router = Router();

router.post("/login", login);

router.post("/register", register);

router.post("/refreshToken", refreshToken);

router.post("/logout", logOut);

export default router;
