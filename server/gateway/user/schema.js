import { GraphQLNonNull,GraphQLString,GraphQLID } from 'graphql';

import { SignUpType } from './types/SignUpType';
import { SetPasswordType } from './types/SetPasswordType';
import { GetUserType } from './types/GetUserType';
import { LoginType } from './types/LoginType';
import { UserVerificationType } from './types/UserVerificationType';
import { LoginInput } from './types/LoginInput';
import { SetPasswordInput } from './types/SetPasswordInput';
import { SignUpInput } from './types/SignUpInput';

import { SignUp }  from './resolvers/signUpResolver';
import { SetPassword } from './resolvers/setPasswordResolver';
import { GetUser } from './resolvers/getUserResolver'
import { Login } from './resolvers/loginResolver'
import { UserVerification } from './resolvers/userVerificationResolver'

export const userQuery = {
    getUser: {
        type : GetUserType,
        args: {
            id : { type: new GraphQLNonNull(GraphQLID)}
        },
        resolve : GetUser
    },
    userVerification : {
        type : UserVerificationType,
        description : 'User verification',
        args : {
            verificationId : { type: new GraphQLNonNull(GraphQLString)}
        },
        resolve : UserVerification
    }
}

export const userMutation = {
    signUp : {
        type: SignUpType,
        description: "New user signin",
        args : {
            input: {
                type: new GraphQLNonNull(SignUpInput),
            },
        },
        resolve : SignUp
    },
    setPassword : {
        type: SetPasswordType,
        description: "Set password",
        args: {
            input: {
                type: new GraphQLNonNull(SetPasswordInput),
            },
        },
        resolve : SetPassword
    },
    login : {
        type: LoginType,
        description : 'User login',
        args: {
            input: {
                type: new GraphQLNonNull(LoginInput),
            },
        },
        resolve : Login
    }
}
