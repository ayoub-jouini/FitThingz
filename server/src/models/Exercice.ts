import { Schema, model } from "mongoose";

import User, { IUser } from "./User";

export interface IExercice {
  createur: IUser;
  nom: string;
  bodyPart: string;
  taget: string[];
  equipment: string[];
  image: string;
  gifUrl: string;
  tags: string[];
}

const exerciceSchema = new Schema<IExercice>({
  createur: { type: Schema.Types.ObjectId, ref: User, required: true },
  nom: { type: String, required: true },
  bodyPart: { type: String, required: true },
  taget: [{ type: String, required: true }],
  equipment: [{ type: String, required: true }],
  image: { type: String, required: true },
  gifUrl: { type: String, required: true },
  tags: [{ type: String, required: true }],
});

export default model<IExercice>("Exercice", exerciceSchema);
