import { GraphQLObjectType,GraphQLNonNull,GraphQLString } from 'graphql';

export const SlipSharedType = new GraphQLObjectType({
    name : 'Slip_Shared',
    description : 'Employee slip shared',
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})