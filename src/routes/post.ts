import { Router } from "express";
import { body } from "express-validator";

import * as postControllers from "../controllers/post";

const router = Router();

router.get("/", postControllers.getAllPosts);

router.get("/id/:id", postControllers.getPostById);

router.get("/creator/:creator", postControllers.getPostsByCreator);

router.get("/tags", postControllers.getPostsByTags);

// router.get("/name/:name", postControllers.getPostsByName);

router.post("/", postControllers.createPost);

router.patch("/commentaire/:id", postControllers.addCommentaire);

router.patch("/:id", postControllers.updatePost);

router.delete("/:id", postControllers.deletePost);

export default router;
