import { Schema, model } from "mongoose";
import User from "./User";

export interface ICommentaire {
  _id?: string;
  user: Schema.Types.ObjectId;
  date_pub?: Date;
  commentaire: string;
  rate: number;
}

const commentaireSchema = new Schema<ICommentaire>({
  user: { type: Schema.Types.ObjectId, ref: User, required: true },
  date_pub: { type: Date, required: true, default: Date.now() },
  commentaire: { type: String, required: true },
});

export default model<ICommentaire>("Commentaire", commentaireSchema);
