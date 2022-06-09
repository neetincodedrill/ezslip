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

    const data = await User.findOne({ email: args.email });

    if(data && !data.isVerified && !data.isActivated){
        const id = data._id.toString();
        const hashId = CryptoJS.AES.encrypt(id, process.env.ENCRYPT_KEY).toString();
        const expireTime = new Date().getTime() + (15 * 60 * 1000);
        const token = hashId + " _ " + expireTime;
        console.log(token)
        const emailSend = await sendSignUpEmail(data.email,token)
        return emailSend
    }else if(data && data.isActivated){
        return { message : 'User already exits! and activated.Please redirect to login page'}
    }else if (data && data.isVerified && !data.isActivated){
        return { 
            id : data._id,
            message : 'User already verified.Please redirect to set-password page'
        }
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
                console.log(token)
                const emailSend = await sendSignUpEmail(user.email,token)
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



