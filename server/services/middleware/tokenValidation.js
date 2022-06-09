import jwt from 'jsonwebtoken'

export const tokenValidation = async(token) => {
    if(token){
        try{
           return  jwt.verify(token,process.env.JWT_SECRET)
        }catch(err){
           return {
               error : true,
               message : 'Session Invalid'
           }
        }
    }
}

