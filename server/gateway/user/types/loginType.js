const { GraphQLObjectType,GraphQLID,GraphQLString} = require('graphql');

const LoginType = new GraphQLObjectType({
    name: "Login",
    description: "User Login",
    fields: () => ({
        id : { type: GraphQLID},
        token: { type: GraphQLString},
        message: { type: GraphQLString}
    })
})

module.exports = LoginType