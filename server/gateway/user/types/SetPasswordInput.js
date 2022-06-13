import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString,GraphQLID } from 'graphql'

export const SetPasswordInput = new GraphQLInputObjectType({
    name : 'SetPasswordInput',
    fields: () => ({
        id : { type: new GraphQLNonNull(GraphQLID)},
        password : { type: new GraphQLNonNull(GraphQLString)}
    })
})