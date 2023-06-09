import express from "express";
import { listItems } from "../controllers/itemController";

const router = express.Router();

router.get("/", listItems);

export default router;
