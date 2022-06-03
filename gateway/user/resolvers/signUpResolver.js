const model = require("../../db/model");
const sendSignUpEmail = require('../../services/email/sendSignUpEmail')
const emailValidation = require('../Error/emailValidation')
const CryptoJS = require("crypto-js");
const { JWT_SECRET } = process.env

const SignIn = async(_,args) => {
    const user = {
        name : args.name,
        organizationName : args.organization_name,
        email: args.email,
        contactNumber : args.contact_number
    }

    const emailExist = await model.User.findOne({ email: user.email });
    const contactExist = await model.User.findOne({ contactNumber : user.contactNumber})

    if(emailExist || contactExist){
        return { successMessage : 'User with given Email address or contact number already exits!'}
    }
    else{
        try{
            const validationResponse = await emailValidation(user.email)
                if(validationResponse === true){
                    const newUser =await model.User.create(user);
                    const id = newUser._id.toString();
                    const hashId = CryptoJS.AES.encrypt(id, JWT_SECRET).toString();
                    // Decrypt
                    // const bytes  = CryptoJS.AES.decrypt(hashId,JWT_SECRET);
                    // const originalText = bytes.toString(CryptoJS.enc.Utf8);
                    // console.log(originalText); 
                    const expireTime = new Date().getTime() + (15 * 60 * 1000)
                    const token = hashId + " _ " + expireTime
                    console.log(token)
                    await sendSignUpEmail(user.email,token)
                    return{
                        successMessage : 'Verification email sent, please check inbox'
                    }
                }
                else{
                    return{ successMessage : 'Invalid Email address' }
                }  
            }catch(error){
                throw new Error(error);
            }
    }  
}

module.exports = SignIn