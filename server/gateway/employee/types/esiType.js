import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLBoolean} from 'graphql';

export const ESIType = new GraphQLObjectType({
    name : 'ESI_Details',
    description : 'Employee ESI_Detalils',
    fields: () => ({
        isEnabled : { type: new GraphQLNonNull(GraphQLBoolean)},
        number : { type: new GraphQLNonNull(GraphQLString)}
    })
})
