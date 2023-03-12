import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import fs from "fs";
import path from "path";

import connect from "./configs/db";
import vars from "./configs/vars";
import HttpError from "./utils/HttpError";
import authorization from "./middlewares/authorization";
import verifyEmailConfirmation from "./middlewares/verifyEmailConfirmation";

import authRouter from "./routes/auth";
import userRoutes from "./routes/user";
import exerciceRoutes from "./routes/exercice";
import alimentRoutes from "./routes/aliment";
import programmeRoutes from "./routes/programme";
import sportifRoutes from "./routes/sportif";

const app = express();

app.use("/uploads/images", express.static(path.join("uploads", "images")));

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

//access control
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

//routes
app.use("/api/auth", authRouter);
app.use(authorization, verifyEmailConfirmation);
app.use("/api/user", userRoutes);
app.use("/api/exercice", exerciceRoutes);
app.use("/api/aliment", alimentRoutes);
app.use("/api/programme", programmeRoutes);
app.use("/api/sportif", sportifRoutes);

//page not found error 404
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

//error handler
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headersSent) {
    return next(error);
  }
  if (!error) {
    return;
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "an unknown error occurred!" });
});

connect();

app.listen(vars.port, () =>
  console.log(`server started on port ${vars.port} (${vars.url})`)
);
