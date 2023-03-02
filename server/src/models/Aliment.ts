import { Schema, model } from "mongoose";

import User, { IUser } from "./User";

export interface IAliment {
  _id?: string;
  createur: IUser;
  titre: string;
  description: string;
  dosage: number;
  calories: number;
  carbs: number;
  fats: number;
  proteins: number;
}

const alimentSchema = new Schema<IAliment>({
  createur: { type: Schema.Types.ObjectId, ref: User, required: true },
  titre: { type: String, required: true },
  description: { type: String, required: true },
  dosage: { type: Number, required: true },
  calories: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fats: { type: Number, required: true },
  proteins: { type: Number, required: true },
});

export default model<IAliment>("Aliment", alimentSchema);
