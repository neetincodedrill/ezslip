import { User } from "../../../database/model/user";
import CryptoJS from "crypto-js";

export const UserVerification = async(_,args) => {
    const verification_id = args.verificationId;
    //Split the string into an array
    var splitString = verification_id.split('_');
    
    const hashId = splitString[0];
    const expireTime =  splitString[1]
    const currentTime = new Date().getTime()
     
    // Decrypt
    const bytes  = CryptoJS.AES.decrypt(hashId,process.env.ENCRYPT_KEY);
    const id = bytes.toString(CryptoJS.enc.Utf8);
    
    const user = await User.findById(id)
    if(!user)return { message : 'User does not exits'}
    if(expireTime > currentTime){
        await User.findByIdAndUpdate({_id : id}, { $set : { isVerified : true}})
        return {
            id : user._id,
            message : "User verified"
        }
    }else{
        return {
            message : "User verification time expired"
        }
    }
}

