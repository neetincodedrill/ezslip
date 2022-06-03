const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} = require('graphql');

const SignInType = require('./types/signUpType')
const SetPasswordType = require('./types/setPasswordType')
const GetUserType = require('./types/getuserType')

const SignIn  = require('./resolvers/signUpResolver');
const SetPassword = require('./resolvers/setPasswordResolver');
const GetUser = require('./resolvers/getUserResolver')


const userQuery = {
    getUser: {
        type : GetUserType,
        args: {
            id : { type: new GraphQLNonNull(GraphQLID)}
        },
        resolve : GetUser
    }
}

const userMutation = {
    signIn : {
        type: SignInType,
        description: "New user signin",
        args : {
            name : { type: new GraphQLNonNull(GraphQLString)},
            organization_name: { type: new GraphQLNonNull(GraphQLString)},
            email : { type: new GraphQLNonNull(GraphQLString)},
            contact_number: { type:new GraphQLNonNull(GraphQLString)}
        },
        resolve : SignIn
    },
    setPassword : {
        type: SetPasswordType,
        description: "set password",
        args: {
            id : { type: new GraphQLNonNull(GraphQLID)},
            password : { type: new GraphQLNonNull(GraphQLString)}
        },
        resolve : SetPassword
    }
}

module.exports = { userQuery,userMutation }