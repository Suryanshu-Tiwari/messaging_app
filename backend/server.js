import express, { json } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

import {app, server} from "./socket/socket.js";

dotenv.config();
// const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res) => {
//     res.send("hello world");
// });

server.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
// click to: https://localhost:8000/api/auth/ `