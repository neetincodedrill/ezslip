const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');

const tokenValidation = async(token) => {
    if(token){
        try{
           return jwt.verify(token,JWT_SECRET)
        }catch(err){
           return {
               error : true,
               message : 'Session Invalid'
           }
        }
    }
}

module.exports = tokenValidation