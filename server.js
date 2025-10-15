import express from "express";
import apiRoutes from "./routes/apiRoutes.js";
const app = express();
const port = 3000;

app.use("/api", apiRoutes);

app.listen(port);
