import { GraphQLObjectType,GraphQLNonNull,GraphQLString} from 'graphql';

export const UpdateType = new GraphQLObjectType({
    name : 'update_employee',
    description : 'Update employee',
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})