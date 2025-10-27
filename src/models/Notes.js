import mongoose from "mongoose";
// 1- Schema

const userSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true } // Created_At & Updated_At
);

// 2- model

const Note = mongoose.model("Note", userSchema);

export default Note;
