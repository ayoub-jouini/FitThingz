import { Schema, model } from "mongoose";
import Aliment, { IAliment } from "./Aliment";

export interface IRepas {
  titre: string;
  aliment: IAliment[];
}

const repasSchema = new Schema<IRepas>({
  titre: { type: String, required: true },
  aliment: [{ type: Schema.Types.ObjectId, ref: Aliment, required: true }],
});

export default model<IRepas>("Repas", repasSchema);
