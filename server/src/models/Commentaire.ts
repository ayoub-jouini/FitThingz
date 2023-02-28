import { Schema, model } from "mongoose";

export interface ICommentaire {
  userId: Schema.Types.ObjectId;
  avatar: string;
  date_pub: string;
  commentaire: string;
}

const commentaireSchema = new Schema<ICommentaire>({
  userId: { type: Schema.Types.ObjectId, required: true },
  avatar: { type: String, required: true },
  date_pub: { type: String, required: true },
  commentaire: { type: String, required: true },
});

export default model<ICommentaire>("Commentaire", commentaireSchema);
