const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} = require('graphql');

const SignUpType = require('./types/signUpType')
const SetPasswordType = require('./types/setPasswordType')
const GetUserType = require('./types/getuserType')
const LoginType = require('./types/loginType')
const UserVerificationType = require('./types/userVerificationType')

const SignUp  = require('./resolvers/signUpResolver');
const SetPassword = require('./resolvers/setPasswordResolver');
const GetUser = require('./resolvers/getUserResolver')
const Login = require('./resolvers/loginResolver')
const UserVerification = require('./resolvers/userVerificationResolver')

const userQuery = {
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

const userMutation = {
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

module.exports = { userQuery,userMutation }