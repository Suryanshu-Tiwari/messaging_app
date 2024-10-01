import express, { json } from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res) => {
//     res.send("hello world");
// });

app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
// click to: https://localhost:8000/api/auth/ `