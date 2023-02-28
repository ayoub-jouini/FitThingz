import { Schema, model } from "mongoose";

import User, { IUser } from "./User";
import Identite, { IIdentite } from "./Identite";
import Experience, { IExperience } from "./Experience";
import Tarification, { ITarification } from "./Tarification";
import Commentaire, { ICommentaire } from "./Commentaire";

interface ICoach {
  user: IUser;
  identite: IIdentite;
  experience: IExperience[];
  conn_aca: string;
  tarification: ITarification[];
  commentaire: ICommentaire[];
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
  commentaire: [
    { type: Schema.Types.ObjectId, ref: Commentaire, required: true },
  ],
});

export default model<ICoach>("Coach", coachSchema);
