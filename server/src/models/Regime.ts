import { Schema, model } from "mongoose";

import Repas, { IRepas } from "./Repas";
import User from "./User";

interface Jour {
  dayNumber: number;
  repas: IRepas[];
}

export interface IRegime {
  _id?: string;
  createur: Schema.Types.ObjectId;
  nom: string;
  image: string;
  type: string;
  description: string;
  duree: number;
  tags: string[];
  jours: Jour[];
}

const regimeSchema = new Schema<IRegime>({
  createur: { type: Schema.Types.ObjectId, ref: User, required: true },
  nom: { type: String, required: true },
  image: { type: String },
  type: { type: String, required: true },
  description: { type: String, required: true },
  duree: { type: Number, required: true },
  tags: [{ type: String, required: true }],
  jours: [
    {
      type: new Schema<Jour>({
        dayNumber: { type: Number, required: true },
        repas: [{ type: Schema.Types.ObjectId, ref: Repas, required: true }],
      }),
    },
  ],
});

export default model<IRegime>("Regime", regimeSchema);
