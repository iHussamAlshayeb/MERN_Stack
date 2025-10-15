import express from "express";
import apiRoutes from "./routes/apiRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use("/api", apiRoutes);

app.listen(port);
