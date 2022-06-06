const { GraphQLNonNull,GraphQLString} = require('graphql');

const ContactType = require('./types/contactType');
const Contact = require('./resolvers/contact')

const contactQuery = {}

const contactMutation = {
    contact : {
        type : ContactType,
        description : 'Any user contact to admin',
        args : {
            name : { type: new GraphQLNonNull(GraphQLString)},
            organization_name: { type: new GraphQLNonNull(GraphQLString)},
            email : { type: new GraphQLNonNull(GraphQLString)},
            contact_number : { type: new GraphQLNonNull(GraphQLString)},
            details : { type: new GraphQLNonNull(GraphQLString)}
        },
        resolve : Contact
    }
}

module.exports = { contactMutation,contactQuery }