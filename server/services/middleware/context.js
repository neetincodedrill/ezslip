import jwt from 'jsonwebtoken';
import { User } from "../../database/model/user";

export const  context = async(req,res,next) => {
    const token =  req.headers.authorization;
  
    //check json web token exits and its verified
    if(!token) return res.status(403).send('A token is required for authentication')
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findOne({ _id : decode.id})
        req.user = user
    
    }catch(error){
        res.status(401).send('Invalid token')
    }
    return next();
}


