import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString } from 'graphql';

export const LoginInput = new GraphQLInputObjectType({
    name : 'LoginInput',
    fields: () => ({
        email : { type: new GraphQLNonNull(GraphQLString)},
        password: { type: new GraphQLNonNull(GraphQLString)}
    })
 
})