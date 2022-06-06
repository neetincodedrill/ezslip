const { GraphQLObjectType,GraphQLNonNull,GraphQLString} = require('graphql');

const SignUpType = new GraphQLObjectType({
    name: "SignUp",
    description: "New user sign in",
    fields: () => ({
        successMessage: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})

module.exports = SignUpType