const { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLInt} = require('graphql');

const GetUserType = new GraphQLObjectType({
    name: "User",
    description: "Get user",
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString)},
        organization_name: { type:new GraphQLNonNull(GraphQLString)},
        email: { type: new GraphQLNonNull(GraphQLString)},
        contact_number: { type: new GraphQLNonNull(GraphQLInt)}
    })
})

module.exports = GetUserType