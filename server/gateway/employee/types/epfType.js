import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLBoolean} from 'graphql';

export const EPFType = new GraphQLObjectType({
    name : 'EPF_Details',
    description : 'Employee EPF_Detalils',
    fields: () => ({
        isEnabled : { type: new GraphQLNonNull(GraphQLBoolean)},
        number : { type: new GraphQLNonNull(GraphQLString)}
    })
})

