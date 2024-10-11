import User from "../models/user.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js"
import bcrypt from "bcryptjs";

export const register = async (req,res) => {
    try {
        const {fullName , username, password ,confirmpassword ,gender} = req.body;

        if( password != confirmpassword){
            return res.status(400).json({err:"Password should match"}); //comparing password and confirmpassword
        }
        
        const user = await User.findOne({username}); 
        
        if(user){
            return res.status(400).json({err:"This Username already exists"}); // checking unique username
        }

        //Hash Password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //api of random profile picture
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });
        // console.log(newUser);
        if(newUser){
            // generate jwt token here
            await generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } 
        else {
            return res.status(400).json({err: "Invalid user data"});
        }

    } catch(err){
        console.log("Error in register controller --> ",err.message);
        res.status(500).json({err:"Internal server error"});
    }
};


export const login = async (req,res) => {

    try{
        const { username, password }= req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");
        if( user ){
            if(!isPasswordCorrect){
                return res.status(400).json({err:"Invalid password !"})
            }
            if(!user){
                return res.status(400).json({err:"Invalid username !"})
            }
        }
        else{
            if(username === ""){
                return res.status(400).json({err:"Enter credentials !"})
            }
            return res.status(400).json({err:"This Username doesn't exists"})
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({message:"Logged In Successfully",
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic: user.profilePic,
        });

    } 
    
    catch(err){
        console.log("Error in login controller",err.message);
        res.status(500).json({err:"Internal server error"});
    }
};


export const logout = (req, res) => {
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged Out Successfully"});
    }
    catch(err){
        console.log("Error in logout Controller",err.message);
        res.status(500).json({error:"Internal Server Error"});
    }
};