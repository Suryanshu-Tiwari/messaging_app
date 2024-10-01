import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const protectRoute  = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({ error:" Unauthorized = No Cookie Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:"Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        req.user = user;

        next();
    }
    catch(err){
        console.log("Error in protectRoute");
        res.status(500).json({error:"Internal server error"});
    }
};

export default protectRoute;