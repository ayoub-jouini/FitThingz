import { Date, Schema, model } from "mongoose";

export interface IToken {
  userId: Schema.Types.ObjectId;
  accessToken: string;
  accessTokenTime: Date;
  refreshToken: string;
  refreshTokenTime: Date;
}

const TokenSchema = new Schema<IToken>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  accessToken: { type: String, required: true },
  accessTokenTime: { type: Date, required: true },
  refreshToken: { type: String, required: true },
  refreshTokenTime: { type: Date, required: true },
});

export default model<IToken>("Token", TokenSchema);
