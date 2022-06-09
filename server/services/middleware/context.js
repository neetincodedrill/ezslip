import  { tokenValidation } from './tokenValidation';

export const context = async({req}) => {
    // verify user identify
    if(req.headers && req.headers.authorization){
        const auth = req.headers.authorization;
        const parts = auth.split(" ");
        const bearer = parts[0];
        const token = parts[1];

        if(bearer == 'Bearer'){
            const user = await tokenValidation(token);
            if(user.error){
                throw Error(user.msg)
            }else{
                req.user = user
                return req.user
            }  
        }else{
            throw Error('Authentication must use Bearer')
        }
    } else{
        throw Error("User must be authenticated")
    }
}

