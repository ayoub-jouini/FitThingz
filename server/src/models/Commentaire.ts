import { Schema, model } from "mongoose";

export interface ICommentaire {
  _id?: string;
  user: Schema.Types.ObjectId;
  avatar: string;
  date_pub: Date;
  commentaire: string;
}

const commentaireSchema = new Schema<ICommentaire>({
  user: { type: Schema.Types.ObjectId, required: true },
  avatar: { type: String, required: true },
  date_pub: { type: Date, required: true, default: Date.now() },
  commentaire: { type: String, required: true },
});

export default model<ICommentaire>("Commentaire", commentaireSchema);
