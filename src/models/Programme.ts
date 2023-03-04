import { Schema, model } from "mongoose";

import User, { IUser } from "./User";
import { IExercice } from "./Exercice";
import Exercice from "./Exercice";

interface Jour {
  dayNumber: number;
  exercices: IExercice[];
}

export interface IProgramme {
  _id?: string;
  createur: IUser;
  nom: string;
  description: string;
  jours: Jour[];
  duree: number;
  image: string;
  tags: string[];
}

const programmeSchema = new Schema<IProgramme>({
  createur: { type: Schema.Types.ObjectId, ref: User, required: true },
  nom: { type: String, required: true },
  description: { type: String, required: true },
  jours: [
    {
      type: new Schema<Jour>({
        dayNumber: { type: Number, required: true },
        exercices: [
          { type: Schema.Types.ObjectId, ref: Exercice, required: true },
        ],
      }),
    },
  ],
  duree: { type: Number, required: true },
  image: { type: String, required: true },
  tags: [{ type: String, required: true }],
});

export default model<IProgramme>("Programme", programmeSchema);
