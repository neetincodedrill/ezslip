const model = require("../../../database/model");
const CryptoJS = require("crypto-js");
const { ENCRYPT_KEY } = process.env

const UserVerification = async(_,args) => {
    const verification_id = args.verificationId;

    //Split the string into an array
    var splitString = verification_id.split('_');
    
    const hashId = splitString[0];
    const expireTime =  splitString[1]
    const currentTime = new Date().getTime()
     
    // Decrypt
    const bytes  = CryptoJS.AES.decrypt(hashId,ENCRYPT_KEY);
    const id = bytes.toString(CryptoJS.enc.Utf8);
    
    const user = await model.User.findById(id)
    if(!user)return { message : 'User does not exits'}
    if(expireTime > currentTime){
        return {
            message : "User verified"
        }
    }else{
        return {
            message : "User verification time expired"
        }
    }

}

module.exports = UserVerification