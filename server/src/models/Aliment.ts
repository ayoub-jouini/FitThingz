import { Schema, model } from "mongoose";

import User, { IUser } from "./User";

export interface IAliment {
  _id?: string;
  createur: Schema.Types.ObjectId;
  titre: string;
  category: string;
  description: string;
  dosage: string;
  calories: string;
  carbs: string;
  fats: string;
  proteins: string;
  image: string;
}

const alimentSchema = new Schema<IAliment>({
  createur: { type: Schema.Types.ObjectId, ref: User, required: true },
  titre: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  dosage: { type: String, required: true },
  calories: { type: String, required: true },
  carbs: { type: String, required: true },
  fats: { type: String, required: true },
  proteins: { type: String, required: true },
  image: { type: String },
});

export default model<IAliment>("Aliment", alimentSchema);
