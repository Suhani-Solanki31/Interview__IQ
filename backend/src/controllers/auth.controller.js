import { User } from "../models/user.models.js";
import genToken from "./token.js";

export const googleAuth = async (req, res) => {
  try {
    //check that user already exist or not
    const { name, email } = req.body;
    let user = await User.findOne({ email });

    //if not exist then save the data in DB
    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }

    // generate the token
    const token = await genToken(user._id);

    //save token in cookie
    res.cookie("token", token, {
      http: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
        user:user,
        message:"User created successfully"
    })
  } catch (error) {
    console.error("Google auth error:", error);
    return res.status(500).json({
        success:false,
        message:`Google auth error : ${error}`
    })
  }
};


export const logOut = async(req,res)=>{
    try {
        await res.clearCookies("token");
        return res.status(200).json({
            success:true,
            message:"Logout successfully"
        })
    } catch (error) {
         return res.status(500).json({
        success:false,
        message:`Logout error : ${error}`
    })
    }
}