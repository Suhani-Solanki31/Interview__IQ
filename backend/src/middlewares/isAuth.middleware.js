import jwt from "jsonwebtoken";

const isAuth = async(req,res,next)=>{

    try {
        const {token} = req.cookies;

        if(!token){
            return res.status(400).json({
                success:false,
                message:"user does not have a token"
            })
        }

       const verifyToken = await jwt.verify(token,process.env.JWT_SECRET);

        if(!verifyToken){
            return res.status(400).json({
                success:false,
                message:"user does not have a valid token"
            })
        }

        req.userId = verifyToken.userId;

        next();
    } catch (error) {

        return res.status(500).json({
            success:false,
            message:`IsAuth error ${error}`
        })
        
    }

}

export default isAuth;