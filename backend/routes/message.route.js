import express from "express";
const router = express.Router();
import { sendMessage, getMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

router.post("/send/:id",protectRoute,sendMessage);
router.get("/:id",protectRoute,getMessage);

export default router;