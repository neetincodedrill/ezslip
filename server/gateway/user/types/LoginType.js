import  { GraphQLObjectType,GraphQLID,GraphQLString} from 'graphql';

export const LoginType = new GraphQLObjectType({
    name: "Login",
    description: "User Login",
    fields: () => ({
        id : { type: GraphQLID},
        token: { type: GraphQLString},
        message: { type: GraphQLString}
    })
})

