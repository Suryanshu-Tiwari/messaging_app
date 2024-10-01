import User from "../models/user.models.js";

export const getUsersForSidebar = async ( req,res) => {
    try{
        const loggedInUserId = req.user._id;

        const filteredUsers  = await User.find({ _id: {$ne:loggedInUserId}}).select("-password -createdAt -updatedAt");

        return res.status(200).json(filteredUsers);
    }
    catch(err){
        console.log("Error in getusersforsidebar controller",err.message);
        return res.status(500).json({err:"Internal Server Error"});
    }
}