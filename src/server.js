import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

// MiddleWare
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
  console.log("Server is started on Port: http://localhost:" + port);
});
