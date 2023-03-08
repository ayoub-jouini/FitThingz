import { Schema, model } from "mongoose";
import User, { IUser } from "./User";
import Commentaire, { ICommentaire } from "./Commentaire";

export interface IPost {
  _id?: string;
  createur: IUser;
  date_pub: Date;
  description: string;
  image: string;
  commentaire: ICommentaire[];
  tags: string[];
}

const postSchema = new Schema<IPost>({
  createur: { type: Schema.Types.ObjectId, ref: User, required: true },
  date_pub: { type: Date, required: true, default: Date.now() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  commentaire: [
    { type: Schema.Types.ObjectId, ref: Commentaire, required: true },
  ],
  tags: [{ type: String, required: true }],
});

export default model<IPost>("Post", postSchema);
