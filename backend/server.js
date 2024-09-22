import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use("/api/auth",authRoutes);

app.get("/",(req,res) => {
    res.send("hello world");
});

app.listen(PORT,() => console.log("Serveris running on port $(PORT"));