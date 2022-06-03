const model = require("../../db/model");
const passwordValidate = require('../Error/passwordValidate')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env;

const SetPassword = async(_,args) => {
    const password = args.password;
    const validationResponse = await passwordValidate(password)
  
    if(validationResponse === true){
      try{      
        const user = await model.User.findById(args.id)
        if(user){
          //hash password        
          const hashPassword = await bcrypt.hash(password,10);
          await model.User.findByIdAndUpdate(
            {_id: args.id },
            {
              $set:{
                  password : hashPassword,
                  isVerified : true
              },
            }
          );
          const token = await jwt.sign({ id : user._id},JWT_SECRET,{expiresIn: "1d"});
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

module.exports = SetPassword