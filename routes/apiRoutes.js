import express from "express";
import { getHome, getAbout } from "../controllers/apiController.js";
const router = express.Router();

router.get("/", getHome);
router.get("/about", getAbout);

export default router;
