import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser {
  nom: string;
  prenom: string;
  date_naiss: string;
  sexe: string;
  email: string;
  password: string;
  phone: number;
  avatar: string;
  lieu: string;
  type: string;
}

const userSchema = new Schema<IUser>({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  date_naiss: { type: String, required: true },
  sexe: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  avatar: { type: String, required: true },
  lieu: { type: String, required: true },
  type: { type: String, required: true },
});

userSchema.methods.encryptPwd = (password: string) =>
  bcrypt.hashSync(password, 10);
userSchema.methods.validatePwd = (password: string, uPassword: string) =>
  bcrypt.compareSync(password, uPassword);

export default model<IUser>("User", userSchema);
