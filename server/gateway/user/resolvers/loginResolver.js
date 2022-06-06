const model = require("../../../database/model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { JWT_SECRET } = process.env;

const Login = async(_,args) => {
    const email = args.email;
    const password = args.password;

    const user = await model.User.findOne({email});
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

    const token =  jwt.sign({id : user._id},JWT_SECRET,{ expiresIn: "1d" });
    return {
        id : user._id,
        token : token
    }
}

module.exports = Login