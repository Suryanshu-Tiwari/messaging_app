import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:6,
    },
    // confirmpassword:{
    //     type:String,
    //     required:[false,"Password and Confirm Password should match"],
    //     minlength:6,
    // },
    gender:{
        type:String,
        required:true,
        enum:["male","female"],
    },
    profilePic:{
        type:String,
        default:"",
    }
},{timestamps:true})

const User = mongoose.model("User", userSchema);

export default User;