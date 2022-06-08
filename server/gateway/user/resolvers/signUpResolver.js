import { User } from "../../../database/model/user";
import { sendSignUpEmail } from '../../../services/email/sendSignUpEmail';
import { emailValidation }from '../Error/emailValidation';
import CryptoJS from "crypto-js";

export const SignUp = async(_,args) => {
    const newUser =  new User({
        name : args.name,
        organizationName : args.organization_name,
        email: args.email,
        contactNumber : args.contact_number
    })

    const emailExist = await User.findOne({ email: args.email });
    const contactExist = await User.findOne({ contactNumber : args.contactNumber})

    if(emailExist || contactExist){
        return { successMessage : 'User with given Email address or contact number already exits!'}
    }
    else{
        try{
            const validationResponse = await emailValidation(args.email)
                if(validationResponse === true){
                    const user = await newUser.save();
                    const id = user._id.toString();
                    const hashId = CryptoJS.AES.encrypt(id, process.env.ENCRYPT_KEY).toString();
                    const expireTime = new Date().getTime() + (15 * 60 * 1000);
                    const token = hashId + " _ " + expireTime;
                    const emailSend = await sendSignUpEmail(user.email,token)
                    console.log(emailSend)
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



