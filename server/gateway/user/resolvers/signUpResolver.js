const model = require("../../../database/model");
const sendSignUpEmail = require('../../../services/email/sendSignUpEmail')
const emailValidation = require('../Error/emailValidation')
const CryptoJS = require("crypto-js");
const { ENCRYPT_KEY } = process.env
const User = model.User;

const SignUp = async(_,args) => {

    const user = new User({
        name : args.name,
        organizationName : args.organization_name,
        email: args.email,
        contactNumber : args.contact_number
    });

    const emailExist = await model.User.findOne({ email: args.email });
    const contactExist = await model.User.findOne({ contactNumber : args.contactNumber})

    if(emailExist || contactExist){
        return { successMessage : 'User with given Email address or contact number already exits!'}
    }
    else{
        try{
            const validationResponse = await emailValidation(args.email)
                if(validationResponse === true){
                    const newUser = await user.save();
                    const id = newUser._id.toString();
                    const hashId = CryptoJS.AES.encrypt(id, ENCRYPT_KEY).toString();
                    const expireTime = new Date().getTime() + (15 * 60 * 1000)
                    const token = hashId + " _ " + expireTime
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

module.exports = SignUp


