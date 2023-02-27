import express from "express";
import { Request, Response, NextFunction } from "express";

import connect from "./configs/db";
import vars from "./configs/vars";
import HttpError from "./utils/HttpError";

const app = express();

app.use(express.json());

//routes

//page not found error 404
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

//error handler
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
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
