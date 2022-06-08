import { GraphQLObjectType,GraphQLNonNull,GraphQLString} from 'graphql';

export const AddType = new GraphQLObjectType({
    name : 'Employee',
    description : 'Add Employee',
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})