import User from "../models/User.js";

export async function getHome(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error in getHome method", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export function getAbout(req, res) {
  res.status(200).json("About Page");
}
