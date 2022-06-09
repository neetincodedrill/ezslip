import { User } from "../../../database/model/user";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const Login = async(_,args) => {
    const email = args.email;
    const password = args.password;

    const user = await User.findOne({email});
    if(!user){
        return {
            message : 'User with email address does not exits'
        }
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword) {
        return { 
            message : 'Password is incorrect'
        }
    }
    const token =  jwt.sign({id : user._id},process.env.JWT_SECRET,{ expiresIn: "1d" });
    return {
        id : user._id,
        token : token
    }
}
