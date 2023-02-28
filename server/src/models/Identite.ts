import { Schema, model } from "mongoose";

export interface IIdentite {
  type: string;
  identite: string;
  image: string;
}

const identiteSchema = new Schema<IIdentite>({
  type: { type: String, required: true },
  identite: { type: String, required: true },
  image: { type: String, required: true },
});

export default model<IIdentite>("Identite", identiteSchema);
