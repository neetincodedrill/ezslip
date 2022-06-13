import { GraphQLInputObjectType,GraphQLString,GraphQLBoolean} from 'graphql';

export const EPFType = new GraphQLInputObjectType({
    name : 'EPF_Details',
    description : 'Employee EPF_Detalils',
    fields: () => ({
        isEnabled : { type: GraphQLBoolean},
        number : { type: GraphQLString}
    })
})

