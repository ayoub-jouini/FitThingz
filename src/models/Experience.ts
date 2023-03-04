import { Schema, model } from "mongoose";

export interface IExperience {
  type: string;
  experience: string;
  image: string;
}

const experienceSchema = new Schema<IExperience>({
  type: { type: String, required: true },
  experience: { type: String, required: true },
  image: { type: String, required: true },
});

export default model<IExperience>("Experience", experienceSchema);
