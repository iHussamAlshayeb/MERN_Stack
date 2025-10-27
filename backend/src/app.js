import express from "express";

import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
//middleware
app.use(express.json()); // Pares JSON body -> req.body
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
  next();
});

app.use("/api/notes", notesRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Notes API (MongoDB Edition) 🚀",
    version: "1.0.0",
  });
});
export default app;
