import { User } from "../../../database/model/user";
import { sendSignUpEmail } from '../../../services/email/sendSignUpEmail';
import { Email } from '../../../services/email/email';
import { emailValidation }from '../error/emailValidation';
import CryptoJS from "crypto-js";

export const SignUp = async(_,args) => {
    const newUser =  new User({
        name : args.input.name,
        organizationName : args.input.organization_name,
        email: args.input.email,
        contactNumber : args.input.contact_number
    })

    const data = await User.findOne({ email: args.input.email });

    if(data && !data.isVerified && !data.isActivated){
        const id = data._id.toString();
        const hashId = CryptoJS.AES.encrypt(id, process.env.ENCRYPT_KEY).toString();
        const expireTime = new Date().getTime() + (15 * 60 * 1000);
        const token = hashId + " _ " + expireTime;
        const emailSend = await sendSignUpEmail(data.email,token)
        console.log(emailSend)
        return emailSend
    }else if(data && data.isActivated){
        return { message : 'User already exits!. Please redirect to login page'}
    }else if (data && data.isVerified && !data.isActivated){
        return { 
            message : 'User already exits!. Please redirect to login page'
        }
    }
    else{
        try{
            const validationResponse = await emailValidation(args.input.email)
            if(validationResponse === true){
                const user = await newUser.save();
                const id = user._id.toString();
                const hashId = CryptoJS.AES.encrypt(id, process.env.ENCRYPT_KEY).toString();
                const expireTime = new Date().getTime() + (15 * 60 * 1000);
                const token = hashId + " _ " + expireTime;
                const emailSend = await sendSignUpEmail(user.email,token)
                console.log(emailSend)
                return emailSend
            }
            else{
                return{ successMessage : 'Invalid Email address' }
            }  
        }catch(error){
            throw new Error(error);
        }
    }  
}



