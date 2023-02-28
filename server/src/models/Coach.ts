import { Schema, model } from "mongoose";
import User from "./User";

interface Identite {
  type: string;
  identite: string;
  image: string;
}

interface Experience {
  type: string;
  experience: string;
  image: string;
}

interface Commentaire {
  userId: Schema.Types.ObjectId;
  avatar: string;
  date_pub: string;
  commentaire: string;
}

interface Tarification {
  titre: string;
  description: string;
  duree: number;
  prix: number;
  promo: number;
}

interface ICoach {
  user: Schema.Types.ObjectId;
  identite: Identite;
  experience: Experience[];
  conn_aca: string;
  tarification: Tarification[];
  commentaire: Commentaire[];
}

const coachSchema = new Schema<ICoach>({
  user: { type: Schema.Types.ObjectId, ref: User, required: true },
  identite: {
    type: new Schema<Identite>({
      type: { type: String, required: true },
      identite: { type: String, required: true },
      image: { type: String, required: true },
    }),
    required: true,
  },
  experience: [
    {
      type: new Schema<Experience>({
        type: { type: String, required: true },
        experience: { type: String, required: true },
        image: { type: String, required: true },
      }),
      required: true,
    },
  ],
  conn_aca: { type: String, required: true },
  tarification: [
    {
      type: new Schema<Tarification>({
        titre: { type: String, required: true },
        description: { type: String, required: true },
        duree: { type: Number, required: true },
        prix: { type: Number, required: true },
        promo: { type: Number, required: true },
      }),
      required: true,
    },
  ],
  commentaire: [
    {
      type: new Schema<Commentaire>({
        userId: { type: Schema.Types.ObjectId, required: true },
        avatar: { type: String, required: true },
        date_pub: { type: String, required: true },
        commentaire: { type: String, required: true },
      }),
      required: true,
    },
  ],
});

export default model<ICoach>("User", coachSchema);
