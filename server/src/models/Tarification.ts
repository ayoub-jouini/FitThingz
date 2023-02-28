import { Schema, model } from "mongoose";

export interface ITarification {
  titre: string;
  description: string;
  duree: number;
  prix: number;
  promo: number;
}

const tarificationSchema = new Schema<ITarification>({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  duree: { type: Number, required: true },
  prix: { type: Number, required: true },
  promo: { type: Number, required: true },
});

export default model<ITarification>("Tarification", tarificationSchema);
