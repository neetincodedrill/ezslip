const { GraphQLObjectType,GraphQLString,GraphQLNonNull} = require('graphql');

const UserVerificationType = new GraphQLObjectType({
    name: "Verification",
    description: "User Verification",
    fields: () => ({
        message: { type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports = UserVerificationType