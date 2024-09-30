import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d'
    })
    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, //mili seconds format
        httpOnly:true, //prevent xss attacks cross-site scripting attacks
        sameSite:"strict",// csrf attacts crooss-site request forgery attacks
        secure: process.env.Node_ENV !=="development",
    })
}
export default generateTokenAndSetCookie;