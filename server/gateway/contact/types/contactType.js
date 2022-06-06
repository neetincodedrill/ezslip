const { GraphQLObjectType,GraphQLNonNull,GraphQLString} = require('graphql');

const ContactType = new GraphQLObjectType({
    name: "Contact",
    description: "Any user contact to admin",
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports = ContactType