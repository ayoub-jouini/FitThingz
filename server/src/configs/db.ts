import mongoose from "mongoose";
import vars from "./vars";

const connect = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(vars.db);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
  }
};

export default connect;
