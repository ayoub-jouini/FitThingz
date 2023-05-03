import { Schema, model } from "mongoose";

import User, { IUser } from "./User";
import Exercice, { IExercice } from "./Exercice";

interface Jour {
  dayNumber: number;
  exercices: IExercice[];
}

export interface IProgramme {
  _id?: string;
  createur: Schema.Types.ObjectId;
  nom: string;
  type: string;
  description: string;
  jours: Jour[];
  duree: number;
  image: string;
  tags: string[];
}

const programmeSchema = new Schema<IProgramme>({
  createur: { type: Schema.Types.ObjectId, ref: User, required: true },
  nom: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  jours: [
    {
      type: new Schema({
        dayNumber: { type: Number, required: true },
        exercices: [
          {
            type: new Schema({
              number: { type: Number, require: true, default: 1 },
              exercice: {
                type: Schema.Types.ObjectId,
                ref: Exercice,
                require: true,
              },
            }),
          },
        ],
      }),
    },
  ],
  duree: { type: Number, required: true },
  image: { type: String },
  tags: [{ type: String }],
});

export default model<IProgramme>("Programme", programmeSchema);
