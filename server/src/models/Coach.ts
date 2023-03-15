import { Schema, model } from "mongoose";

import User from "./User";
import Identite, { IIdentite } from "./Identite";
import Experience, { IExperience } from "./Experience";
import Tarification, { ITarification } from "./Tarification";
import Commentaire, { ICommentaire } from "./Commentaire";
import Exercice from "./Exercice";
import Programme from "./Programme";
import Regime from "./Regime";

export interface ICoach {
  _id?: string;
  user: Schema.Types.ObjectId;
  identite: IIdentite;
  experience: IExperience[];
  conn_aca: string;
  tarification: ITarification[];
  exercice: Schema.Types.ObjectId[];
  programme: Schema.Types.ObjectId[];
  regime: Schema.Types.ObjectId[];
  sportif: Schema.Types.ObjectId[];
  commentaire: ICommentaire[];
  verif?: boolean;
}

const coachSchema = new Schema<ICoach>({
  user: { type: Schema.Types.ObjectId, ref: User, required: true },
  identite: { type: Schema.Types.ObjectId, ref: Identite, required: true },
  experience: [
    { type: Schema.Types.ObjectId, ref: Experience, required: true },
  ],
  conn_aca: { type: String, required: true },
  tarification: [{ type: Schema.Types.ObjectId, ref: Tarification }],
  exercice: [{ type: Schema.Types.ObjectId, ref: Exercice }],
  programme: [{ type: Schema.Types.ObjectId, ref: Programme }],
  regime: [{ type: Schema.Types.ObjectId, ref: Regime }],
  sportif: [{ type: Schema.Types.ObjectId, ref: User }],
  commentaire: [{ type: Schema.Types.ObjectId, ref: Commentaire }],
  verif: { type: Boolean, required: true, default: false },
});

export default model<ICoach>("Coach", coachSchema);
