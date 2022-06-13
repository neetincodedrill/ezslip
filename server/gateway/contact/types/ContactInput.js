import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString } from 'graphql'

export const ContactInput = new GraphQLInputObjectType({
    name : 'ContactInput',
    fields: () => ({
        name : { type: new GraphQLNonNull(GraphQLString)},
        organization_name: { type: new GraphQLNonNull(GraphQLString)},
        email : { type: new GraphQLNonNull(GraphQLString)},
        contact_number : { type: new GraphQLNonNull(GraphQLString)},
        details : { type: new GraphQLNonNull(GraphQLString)}
    })
})