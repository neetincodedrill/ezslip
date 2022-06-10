import jwt from 'jsonwebtoken'

export const tokenValidation = async(token) => {
    if(token){
        try{
            const verify  = jwt.verify(token,process.env.JWT_SECRET)
           return  verify
        }catch(err){
           return {
               error : true,
               message : 'Token Invalid'
           }
        }
    }
}

