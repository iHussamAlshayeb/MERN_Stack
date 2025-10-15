import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("MogoDB Connected Successfully!");
  } catch (error) {
    console.log("Error to connect", error);
    process.exit(1);
  }
};
