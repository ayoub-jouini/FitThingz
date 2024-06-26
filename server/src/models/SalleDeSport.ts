import { Schema, model } from "mongoose";

import User from "./User";
import Commentaire, { ICommentaire } from "./Commentaire";
import Tarification, { ITarification } from "./Tarification";
import Sportif from "./Sportif";

export interface ISalleDeSport {
  _id?: string;
  createur: Schema.Types.ObjectId;
  nom: string;
  description: string;
  lieu: string;
  ouverture: string;
  cloture: string;
  jours_sem: string[];
  equipements: string[];
  sportif: Schema.Types.ObjectId[];
  tarification: ITarification[];
  commentaire: ICommentaire[];
  verif?: boolean;
}

const salleDeSportSchema = new Schema<ISalleDeSport>({
  createur: { type: Schema.Types.ObjectId, ref: User, required: true },
  nom: { type: String, required: true },
  description: { type: String, required: true },
  lieu: { type: String, required: true },
  ouverture: { type: String, required: true },
  cloture: { type: String, required: true },
  jours_sem: [{ type: String, required: true }],
  equipements: [{ type: String, required: true }],
  sportif: [{ type: Schema.Types.ObjectId, ref: User }],
  tarification: [
    { type: Schema.Types.ObjectId, ref: Tarification, required: true },
  ],
  commentaire: [
    { type: Schema.Types.ObjectId, ref: Commentaire, required: true },
  ],
  verif: { type: Boolean, required: true, default: false },
});

export default model<ISalleDeSport>("SalleDeSport", salleDeSportSchema);
