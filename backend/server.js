import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
// import mongoose from "mongoose";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use("/api/auth",authRoutes);

app.get("/",(req,res) => {
    res.send("hello world");
});

app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
// click to: https://localhost:8000/api/auth/ `