import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
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
  avatar: { type: String },
  lieu: { type: String, required: true },
  type: { type: String, required: true },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

export default model<IUser>("User", userSchema);
