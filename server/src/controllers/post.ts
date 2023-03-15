import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import HttpError from "../utils/HttpError";
import { AuthReq } from "../middlewares/authorization";

import Post, { IPost } from "../models/Post";
import Commentaire, { ICommentaire } from "../models/Commentaire";

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let posts: IPost[];
  try {
    posts = await Post.find({})
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!posts) {
      const error = new HttpError("there is no posts", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find posts." + err,
      500
    );

    return next(error);
  }

  let postArray: IPost[] = [];
  for (let i = 0; i < posts.length; i++) {
    const singlePost: IPost = {
      _id: posts[i]._id,
      createur: posts[i].createur,
      date_pub: posts[i].date_pub,
      description: posts[i].description,
      commentaire: posts[i].commentaire,
      image: posts[i].image,
      tags: posts[i].tags,
    };
    postArray.push(singlePost);
  }

  res.json({ posts: postArray });
};

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  let post: IPost;
  try {
    post = await Post.findById(id).populate("createur");
    if (!post) {
      const error = new HttpError("there is no post", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find posts." + err,
      500
    );

    return next(error);
  }

  res.json({ post });
};

export const getPostsByCreator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const createur: string = req.params.creator;

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let posts: IPost[];
  try {
    posts = await Post.find({ createur })
      .skip((page - 1) * limit)
      .limit(limit);
    if (!posts) {
      const error = new HttpError("there is no posts", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find posts." + err,
      500
    );

    return next(error);
  }

  let postArray: IPost[] = [];
  for (let i = 0; i < posts.length; i++) {
    const singlePost: IPost = {
      _id: posts[i]._id,
      createur: posts[i].createur,
      date_pub: posts[i].date_pub,
      description: posts[i].description,
      commentaire: posts[i].commentaire,
      image: posts[i].image,
      tags: posts[i].tags,
    };
    postArray.push(singlePost);
  }

  res.json({ posts: postArray });
};

export const getPostsByTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let tags: string[];
  if (typeof req.query.tags === "string") tags = req.query.tags.split(",");

  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;

  let posts: IPost[];
  try {
    posts = await Post.find({ tags: { $all: tags } })
      .populate("createur")
      .skip((page - 1) * limit)
      .limit(limit);
    if (!posts) {
      const error = new HttpError("there is no posts", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find posts." + err,
      500
    );

    return next(error);
  }

  let postArray: IPost[] = [];
  for (let i = 0; i < posts.length; i++) {
    const singlePost: IPost = {
      _id: posts[i]._id,
      createur: posts[i].createur,
      date_pub: posts[i].date_pub,
      description: posts[i].description,
      commentaire: posts[i].commentaire,
      image: posts[i].image,
      tags: posts[i].tags,
    };
    postArray.push(singlePost);
  }

  res.json({ posts: postArray });
};

// export const getPostsByName = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};

export const createPost = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const post = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const createdPost = new Post({
      createur: req.userData._id,
      description: post.description,
      image: post.image,
      tags: post.tags,
    });
    await createdPost.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save post." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "created!" });
};

export const addCommentaire = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const commentaire = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const existingPost = await Post.findById(id);
    if (!existingPost) {
      const error = new HttpError("post does not exist", 404);
      return next(error);
    }

    const newCommentaire: ICommentaire = new Commentaire({
      user: req.userData,
      avatar: commentaire.avatar,
      commentaire: commentaire.commentaire,
    });

    existingPost.commentaire.push(newCommentaire);

    await existingPost.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save Commentaire." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deleteCommentaire = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const idPost = req.params.idPost;
  const idCommentaire = req.params.idCommentaire;

  try {
    const existingPost = await Post.findById(idPost);
    if (!existingPost) {
      const error = new HttpError("Post does not exist", 404);
      return next(error);
    }

    const existingCommentaire: ICommentaire = existingPost.commentaire.find(
      (value) => value._id === idCommentaire
    );

    if (
      existingCommentaire.user !== req.userData._id &&
      existingPost.createur !== req.userData._id
    ) {
      const error = new HttpError("you can't update this commentaire", 404);
      return next(error);
    }

    existingPost.update({
      $pull: { commentaire: { $elemMatch: { _id: idCommentaire } } },
    });

    await existingPost.save();

    await existingPost.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save Commentaire." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const updatePost = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const post = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 401);
    return next(error);
  }

  try {
    const existingPost = await Post.findById(id);
    if (!existingPost) {
      const error = new HttpError("post does not exist", 404);
      return next(error);
    }

    if (existingPost.createur !== req.userData._id) {
      const error = new HttpError("you can't update this post", 404);
      return next(error);
    }

    existingPost.description = post.description;
    existingPost.image = post.image;

    await existingPost.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not save post." + err,
      500
    );
    return next(error);
  }

  res.json({ message: "updated!" });
};

export const deletePost = async (
  req: AuthReq,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id);
    if (!post) {
      const error = new HttpError("post does not exist", 404);
      return next(error);
    }

    if (post.createur !== req.userData._id && req.userData.type !== "admin") {
      const error = new HttpError("you can't delete this post", 404);
      return next(error);
    }

    await post.remove();
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not remove post",
      500
    );
    return next(error);
  }

  res.status(201).json({ message: "post removed!" });
};
