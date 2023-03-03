import { Schema, model } from "mongoose";

import User, { IUser } from "./User";
import Identite, { IIdentite } from "./Identite";
import Experience, { IExperience } from "./Experience";
import Tarification, { ITarification } from "./Tarification";
import Commentaire, { ICommentaire } from "./Commentaire";
import Exercice, { IExercice } from "./Exercice";
import Programme, { IProgramme } from "./Programme";
import Regime, { IRegime } from "./Regime";

export interface ICoach {
  _id?: string;
  user: IUser;
  identite: IIdentite;
  experience: IExperience[];
  conn_aca: string;
  tarification: ITarification[];
  exercice: IExercice[];
  programme: IProgramme[];
  regime: IRegime[];
  sportif: IUser[];
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
  tarification: [
    { type: Schema.Types.ObjectId, ref: Tarification, required: true },
  ],
  exercice: [{ type: Schema.Types.ObjectId, ref: Exercice, required: true }],
  programme: [{ type: Schema.Types.ObjectId, ref: Programme, required: true }],
  regime: [{ type: Schema.Types.ObjectId, ref: Regime, required: true }],
  sportif: [{ type: Schema.Types.ObjectId, ref: User, required: true }],
  commentaire: [
    { type: Schema.Types.ObjectId, ref: Commentaire, required: true },
  ],
  verif: { type: Boolean, required: true, default: false },
});

export default model<ICoach>("Coach", coachSchema);
