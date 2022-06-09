import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLID} from 'graphql';

export const SignUpType = new GraphQLObjectType({
    name: "SignUp",
    description: "New user sign in",
    fields: () => ({
        id : { type : GraphQLID},
        successMessage: { type: new GraphQLNonNull(GraphQLString)}
    })
})