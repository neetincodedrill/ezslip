const { GraphQLObjectType,GraphQLNonNull,GraphQLString} = require('graphql');

const SignInType = new GraphQLObjectType({
    name: "SignIn",
    description: "New user sign in",
    fields: () => ({
        successMessage: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})

module.exports = SignInType