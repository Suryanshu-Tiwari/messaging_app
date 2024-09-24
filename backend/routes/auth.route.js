import express from "express";
const router = express.Router();
import { registeruser,loginuser,logoutuser } from "../controllers/auth.controller.js";


router.post("/register",registeruser);

router.post("/login",loginuser);

router.post("/logout",logoutuser);

export default router;