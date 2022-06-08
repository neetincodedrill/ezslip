import { GraphQLObjectType,GraphQLNonNull,GraphQLString} from 'graphql';

export const SignUpType = new GraphQLObjectType({
    name: "SignUp",
    description: "New user sign in",
    fields: () => ({
        successMessage: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})