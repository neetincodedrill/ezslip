import { GraphQLInputObjectType,GraphQLString,GraphQLBoolean} from 'graphql';

export const ESIType = new GraphQLInputObjectType({
    name : 'ESI_Details',
    description : 'Employee ESI_Detalils',
    fields: () => ({
        isEnabled : { type: GraphQLBoolean},
        number : { type: GraphQLString}
    })
})
