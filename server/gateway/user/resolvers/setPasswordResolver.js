import { User } from "../../../database/model/user";
import { passwordValidate } from '../error/passwordValidate';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const SetPassword = async(_,args) => {
    const password = args.password;
    const validationResponse = await passwordValidate(password)
  
    if(validationResponse === true){
      try{      
        const user = await User.findById(args.id)
        if(!user.isVerified) return { message : "User not verified" }
        if(user){
          //hash password        
          const hashPassword = await bcrypt.hash(password,10);
          await User.findByIdAndUpdate(
            {_id: args.id },
            {
              $set:{
                  password : hashPassword,
                  isActivated : true
              },
            }
          );
          const token =  jwt.sign({ id : user._id},process.env.JWT_SECRET,{  expiresIn: "8h"});
        return {
          token: token,
          id : user._id
        }          
        }
        else{
          return{
            message : "User does not exits!"
          }
        }        
      }
      catch (error) {
        throw new Error(error);
      }
    }else{
      return{
        message : "The password must be at least 8 characters including one uppercase, one lowercase, one number and a special character"
      }
    }   
}