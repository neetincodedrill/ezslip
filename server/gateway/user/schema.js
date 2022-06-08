import { GraphQLNonNull,GraphQLString,GraphQLID } from 'graphql';

import { SignUpType } from './types/signUpType';
import { SetPasswordType } from './types/setPasswordType';
import { GetUserType } from './types/getuserType';
import { LoginType } from './types/loginType';
import { UserVerificationType } from './types/userVerificationType';

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
            name : { type: new GraphQLNonNull(GraphQLString)},
            organization_name: { type: new GraphQLNonNull(GraphQLString)},
            email : { type: new GraphQLNonNull(GraphQLString)},
            contact_number: { type:new GraphQLNonNull(GraphQLString)}
        },
        resolve : SignUp
    },
    setPassword : {
        type: SetPasswordType,
        description: "Set password",
        args: {
            id : { type: new GraphQLNonNull(GraphQLID)},
            password : { type: new GraphQLNonNull(GraphQLString)}
        },
        resolve : SetPassword
    },
    login : {
        type: LoginType,
        description : 'User login',
        args: {
            email : { type: new GraphQLNonNull(GraphQLString)},
            password: { type: new GraphQLNonNull(GraphQLString)}
        },
        resolve : Login
    }
}
