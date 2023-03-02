import { Schema, model } from "mongoose";

import User, { IUser } from "./User";

export interface IExercice {
  _id?: string;
  createur: IUser;
  nom: string;
  bodyPart: string;
  target: string;
  equipment: string;
  image?: string;
  gifUrl?: string;
  tags?: string[];
}

const exerciceSchema = new Schema<IExercice>({
  createur: { type: Schema.Types.ObjectId, ref: User, required: true },
  nom: { type: String, required: true },
  bodyPart: { type: String, required: true },
  target: { type: String, required: true },
  equipment: { type: String, required: true },
  image: { type: String },
  gifUrl: { type: String },
  tags: [{ type: String }],
});

export default model<IExercice>("Exercice", exerciceSchema);
