import { Schema, model } from "mongoose";

import User, { IUser } from "./User";
import Coach, { ICoach } from "./Coach";
import Regime, { IRegime } from "./Regime";
import Programme, { IProgramme } from "./Programme";
import SalleDeSport, { ISalleDeSport } from "./SalleDeSport";

interface histoBles {
  date: string;
  bodyPart: string;
  description: string;
}

export interface ISportif {
  user: IUser;
  taille: number;
  poids: number;
  histo_bles: histoBles[];
  allergies: string[];
  coach: ICoach;
  salle: ISalleDeSport;
  regime: IRegime;
  programme: IProgramme;
}

const sportifSchema = new Schema<ISportif>({
  user: { type: Schema.Types.ObjectId, ref: User, required: true },
  taille: { type: Number, require: true },
  poids: { type: Number, require: true },
  histo_bles: [
    {
      type: new Schema<histoBles>({
        date: { type: String, required: true },
        bodyPart: { type: String, required: true },
        description: { type: String, required: true },
      }),
      require: true,
    },
  ],
  allergies: [{ type: String, require: true }],
  coach: { type: Schema.Types.ObjectId, ref: Coach, required: true },
  salle: { type: Schema.Types.ObjectId, ref: SalleDeSport, required: true },
  regime: { type: Schema.Types.ObjectId, ref: Regime, required: true },
  programme: { type: Schema.Types.ObjectId, ref: Programme, required: true },
});

export default model<ISportif>("Sportif", sportifSchema);
