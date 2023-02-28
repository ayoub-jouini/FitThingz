import { Schema, model } from "mongoose";

import User, { IUser } from "./User";
import { IExercice } from "./Exercice";
import Exercice from "./Exercice";

export interface IProgramme {
  createur: IUser;
  nom: string;
  description: string;
  exercice: IExercice[];
  temps: number;
  jour_sem: string[];
  duree: number;
  image: string;
  tags: string[];
}

const programmeSchema = new Schema<IProgramme>({
  createur: { type: Schema.Types.ObjectId, ref: User, required: true },
  nom: { type: String, required: true },
  description: { type: String, required: true },
  exercice: [{ type: Schema.Types.ObjectId, ref: Exercice, required: true }],
  temps: { type: Number, required: true },
  jour_sem: [{ type: String, required: true }],
  duree: { type: Number, required: true },
  image: { type: String, required: true },
  tags: [{ type: String, required: true }],
});

export default model<IProgramme>("Programme", programmeSchema);
