import { GraphQLNonNull,GraphQLString} from 'graphql';
import  { ContactType } from './types/contactType';
import { Contact } from './resolvers/contact'

export const contactQuery = {}

export const contactMutation = {
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