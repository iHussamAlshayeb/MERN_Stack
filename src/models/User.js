import mongoose from "mongoose";
// 1- Schema

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true } // Created_At & Updated_At
);

// 2- model

const User = mongoose.model("User", userSchema);

export default User;
