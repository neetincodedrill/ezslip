import { GraphQLObjectType,GraphQLNonNull,GraphQLString} from 'graphql';

export const ContactType = new GraphQLObjectType({
    name: "Contact",
    description: "Any user contact to admin",
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})
