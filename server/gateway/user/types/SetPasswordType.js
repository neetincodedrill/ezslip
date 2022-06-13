import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLID} from 'graphql';

export const SetPasswordType = new GraphQLObjectType({
    name: "Set_Password",
    description: "Set password after user verification",
    fields: () => ({
        id : { type: GraphQLID},
        token: { type: GraphQLString},
        message: { type: GraphQLString}
    })
})
